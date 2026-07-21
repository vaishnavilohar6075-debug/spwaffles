/**
 * Owner Dashboard Logic - Backend Database Connected
 */

const ADMIN_PASSWORD = "spwaffles";

/**
 * Fetch orders from the Backend SQLite Database
 */
window.loadOrders = async function () {
    const $grid = $('#orders-grid');
    const $refreshIcon = $('#refresh-icon');
    const $refreshText = $('#refresh-text');
    const $lastUpdated = $('#last-updated');
    
    $refreshIcon.addClass('bx-spin');
    $refreshText.text('Refreshing...');
    
    if (!$grid.length) return;

    try {
        const response = await fetch('/api/orders');
        const storedOrders = await response.json();
        
        $grid.empty();

        const totalOrders = storedOrders.length;
        const pendingOrders = storedOrders.filter(o => o.status === 'Pending').length;
        const totalRevenue = storedOrders.reduce((acc, order) => acc + (Number(order.total) || 0), 0);

        $('#stat-total-orders').text(totalOrders);
        $('#stat-pending-orders').text(pendingOrders);
        $('#stat-total-revenue').text(`₹${totalRevenue.toLocaleString()}`);

        const now = new Date();
        $lastUpdated.text("Last updated: " + now.toLocaleTimeString());

        if (storedOrders.length === 0) {
            $grid.append(`
                <div class="col-12 py-5">
                    <div class="no-orders text-center">
                        <i class='bx bx-receipt fs-1 mb-3 opacity-50' style="color: var(--primary-color);"></i>
                        <h4 class="text-white fw-bold">No Orders Yet</h4>
                        <p class="mb-0 text-muted">Your dashboard is empty.</p>
                    </div>
                </div>
            `);
        } else {
            // Render latest orders first (Backend fetches them in insertion order)
            const reversedOrders = [...storedOrders].reverse();

            reversedOrders.forEach((order) => {
                const statusClass = order.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark';

                let itemsHtml = '';
                if (order.items && Array.isArray(order.items)) {
                    order.items.forEach(item => {
                        itemsHtml += `
                            <div class="d-flex justify-content-between text-sm py-1 border-bottom border-secondary border-opacity-25">
                                <span class="text-white fw-bold fs-6">${item.qty}x ${item.name}</span>
                                <span class="fw-bold text-primary">₹${item.price * item.qty}</span>
                            </div>
                        `;
                    });
                }

                $grid.append(`
                    <div class="col-md-6 col-lg-4">
                        <div class="card bg-dark border-secondary h-100 shadow-sm transition-all duration-300 hover:border-primary">
                            <div class="card-header bg-transparent d-flex justify-content-between align-items-center border-secondary py-3">
                                <span class="text-primary fw-bold">${order.id}</span>
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
                                    <button class="btn btn-success btn-sm flex-grow-1 fw-bold" onclick="markCompleted('${order.id}')">
                                        <i class='bx bx-check'></i> Mark Complete
                                    </button>
                                ` : ''}
                                <button class="btn btn-outline-danger btn-sm px-3" onclick="deleteOrder('${order.id}')">
                                    <i class='bx bx-trash'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `);
            });
        }
        
        setTimeout(() => {
            $refreshIcon.removeClass('bx-spin');
            $refreshText.text('Refresh Dashboard');
        }, 600);

    } catch (error) {
        console.error(error);
        $grid.html(`<div class="col-12 text-center text-danger py-5"><p>Failed to connect to backend server.</p></div>`);
        $refreshIcon.removeClass('bx-spin');
        $refreshText.text('Refresh Dashboard');
    }
};

/**
 * Update Status via API
 */
window.markCompleted = async function (id) {
    try {
        await fetch(`/api/orders/${id}/complete`, { method: 'PUT' });
        window.loadOrders();
    } catch (err) {
        alert("Error updating order.");
    }
};

/**
 * Delete Order via API
 */
window.deleteOrder = async function (id) {
    if (confirm("Are you sure you want to delete this order?")) {
        try {
            await fetch(`/api/orders/${id}`, { method: 'DELETE' });
            window.loadOrders();
        } catch (err) {
            alert("Error deleting order.");
        }
    }
};

// Start Dashboard flow
$(document).ready(function () {
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
