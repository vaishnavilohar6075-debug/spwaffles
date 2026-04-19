// Admin Dashboard Logic - jQuery Version

$(document).ready(function () {
    const password = "spwaffles";
    const $container = $('.admin-container');
    const $grid = $('#orders-grid');

    // Simple Authentication Check
    function checkAuth() {
        const isAuth = sessionStorage.getItem('cafe_admin_auth');

        if (isAuth === 'true') {
            $container.show();
            loadOrders();
        } else {
            const input = prompt("Please enter owner password to access dashboard:");
            if (input === password) {
                sessionStorage.setItem('cafe_admin_auth', 'true');
                $container.fadeIn();
                loadOrders();
            } else {
                alert("Incorrect password. Access denied.");
                window.location.href = "index.html";
            }
        }
    }

    // Load and Render Orders
    window.loadOrders = function () {
        const storedOrders = JSON.parse(localStorage.getItem('cafe_orders') || '[]');
        $grid.empty();

        if (storedOrders.length === 0) {
            $grid.append(`
                <div class="col-12 text-center py-5 text-muted">
                    <i class='bx bx-receipt fs-1 mb-3 opacity-50'></i>
                    <p class="fs-4">No orders received yet.</p>
                </div>
            `);
            return;
        }

        // Show latest orders first
        const reversedOrders = [...storedOrders].reverse();

        reversedOrders.forEach((order, index) => {
            const originalIndex = storedOrders.length - 1 - index;
            const statusClass = order.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark';

            let itemsHtml = '';
            order.items.forEach(item => {
                itemsHtml += `
                    <div class="d-flex justify-content-between text-sm py-1 border-bottom border-secondary border-opacity-25">
                        <span>${item.qty}x ${item.name}</span>
                        <span class="fw-bold text-white">₹${item.total}</span>
                    </div>
                `;
            });

            const card = `
                <div class="col-md-6 col-lg-4">
                    <div class="card bg-dark border-secondary h-100 shadow-sm transition-all duration-300 hover:border-primary">
                        <div class="card-header bg-transparent d-flex justify-content-between align-items-center border-secondary py-3">
                            <span class="text-primary fw-bold">#${order.id.slice(-6).toUpperCase()}</span>
                            <span class="badge ${statusClass}">${order.status}</span>
                        </div>
                        <div class="card-body">
                            <div class="text-muted small mb-3"><i class='bx bx-time'></i> ${order.date}</div>
                            <div class="order-items mb-3">
                                ${itemsHtml}
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-4">
                                <span class="fs-4 fw-bold text-primary">₹${order.total}</span>
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
            `;
            $grid.append(card);
        });
    }

    // Action Handlers (Globally accessible for onclick)
    window.markCompleted = function (index) {
        const orders = JSON.parse(localStorage.getItem('cafe_orders') || '[]');
        if (orders[index]) {
            orders[index].status = 'Completed';
            localStorage.setItem('cafe_orders', JSON.stringify(orders));
            loadOrders();
        }
    };

    window.deleteOrder = function (index) {
        if (confirm("Are you sure you want to delete this order?")) {
            const orders = JSON.parse(localStorage.getItem('cafe_orders') || '[]');
            orders.splice(index, 1);
            localStorage.setItem('cafe_orders', JSON.stringify(orders));
            loadOrders();
        }
    };

    // Run Auth
    checkAuth();
});
