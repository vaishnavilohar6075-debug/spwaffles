/**
 * Owner Dashboard Logic - SP Waffles & Cafe
 * Handles authentication, order fetching, and status management.
 */

const ADMIN_PASSWORD = "spwaffles";

/**
 * Loads and renders orders from localStorage.
 * Updates dashboard statistics in real-time.
 */
window.loadOrders = function () {
    const $grid = $('#orders-grid');
    const $refreshIcon = $('#refresh-icon');
    const $refreshText = $('#refresh-text');
    const $lastUpdated = $('#last-updated');
    
    // Visual Refresh Feedback
    $refreshIcon.addClass('bx-spin');
    $refreshText.text('Refreshing...');
    
    if (!$grid.length) return;

    try {
        const rawData = localStorage.getItem('cafe_orders');
        const storedOrders = JSON.parse(rawData || '[]');
        $grid.empty();

        // Calculate Dashboard Stats
        const totalOrders = storedOrders.length;
        const pendingOrders = storedOrders.filter(o => o.status === 'Pending').length;
        const totalRevenue = storedOrders.reduce((acc, order) => acc + (Number(order.total) || 0), 0);

        // Update Stats UI
        $('#stat-total-orders').text(totalOrders);
        $('#stat-pending-orders').text(pendingOrders);
        $('#stat-total-revenue').text(`₹${totalRevenue.toLocaleString()}`);

        // Update Timestamp
        const now = new Date();
        $lastUpdated.text("Last updated: " + now.toLocaleTimeString());

        if (storedOrders.length === 0) {
            $grid.append(`
                <div class="col-12 py-5">
                    <div class="no-orders text-center">
                        <i class='bx bx-receipt fs-1 mb-3 opacity-50' style="color: var(--primary-color);"></i>
                        <h4 class="text-white fw-bold">No Orders Yet</h4>
                        <p class="mb-0 text-muted">Your dashboard is empty. New orders will appear here.</p>
                    </div>
                </div>
            `);
        } else {
            // Render latest orders first
            const reversedOrders = [...storedOrders].reverse();

            reversedOrders.forEach((order, index) => {
                const originalIndex = storedOrders.length - 1 - index;
                const statusClass = order.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark';

                let itemsHtml = '';
                if (order.items && Array.isArray(order.items)) {
                    order.items.forEach(item => {
                        itemsHtml += `
                            <div class="d-flex justify-content-between text-sm py-1 border-bottom border-secondary border-opacity-25">
                                <span class="text-white fw-bold fs-6">${item.qty}x ${item.name}</span>
                                <span class="fw-bold text-primary">₹${item.total}</span>
                            </div>
                        `;
                    });
                }

                $grid.append(`
                    <div class="col-md-6 col-lg-4">
                        <div class="card bg-dark border-secondary h-100 shadow-sm transition-all duration-300 hover:border-primary">
                            <div class="card-header bg-transparent d-flex justify-content-between align-items-center border-secondary py-3">
                                <span class="text-primary fw-bold">#${(order.id || 'N/A').slice(-6).toUpperCase()}</span>
                                <span class="badge ${statusClass}">${order.status}</span>
                            </div>
                            <div class="card-body">
                                <div class="text-white-50 small mb-3"><i class='bx bx-time'></i> ${order.date}</div>
                                <div class="order-items mb-3">${itemsHtml}</div>
                                <div class="d-flex justify-content-between align-items-center mt-4">
                                    <span class="fs-4 fw-bold text-white">₹${order.total}</span>
                                </div>
                            </div>
                            <div class="card-footer bg-transparent border-secondary d-flex gap-2 p-3">
                                ${order.status === 'Pending' ? `
                                    <button class="btn btn-success btn-sm flex-grow-1 fw-bold" onclick="markCompleted(${originalIndex})">
                                        <i class='bx bx-check'></i> Mark Complete
                                    </button>
                                ` : ''}
                                <button class="btn btn-outline-danger btn-sm px-3" onclick="deleteOrder(${originalIndex})">
                                    <i class='bx bx-trash'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `);
            });
        }
        
        // Reset Refresh Button view after a short delay
        setTimeout(() => {
            $refreshIcon.removeClass('bx-spin');
            $refreshText.text('Refresh Dashboard');
        }, 600);

    } catch (error) {
        $grid.html(`<div class="col-12 text-center text-danger py-5"><p>Failed to load orders. Storage might be corrupted.</p></div>`);
        $refreshIcon.removeClass('bx-spin');
        $refreshText.text('Refresh Dashboard');
    }
};

/**
 * Marks an order as completed.
 */
window.markCompleted = function (index) {
    const orders = JSON.parse(localStorage.getItem('cafe_orders') || '[]');
    if (orders[index]) {
        orders[index].status = 'Completed';
        localStorage.setItem('cafe_orders', JSON.stringify(orders));
        window.loadOrders();
    }
};

/**
 * Deletes an order from storage.
 */
window.deleteOrder = function (index) {
    if (confirm("Are you sure you want to delete this order?")) {
        const orders = JSON.parse(localStorage.getItem('cafe_orders') || '[]');
        orders.splice(index, 1);
        localStorage.setItem('cafe_orders', JSON.stringify(orders));
        window.loadOrders();
    }
};

// Start Dashboard flow
$(document).ready(function () {
    /**
     * Checks for admin session before showing dashboard.
     */
    function checkAuth() {
        const isAuth = sessionStorage.getItem('cafe_admin_auth');
        const $container = $('.admin-container');

        if (isAuth === 'true') {
            $container.show();
            window.loadOrders();
        } else {
            const input = prompt("Please enter owner password to access dashboard:");
            if (input === ADMIN_PASSWORD) {
                sessionStorage.setItem('cafe_admin_auth', 'true');
                $container.fadeIn();
                window.loadOrders();
            } else {
                alert("Incorrect password. Access denied.");
                window.location.href = "index.html";
            }
        }
    }

    checkAuth();
});
