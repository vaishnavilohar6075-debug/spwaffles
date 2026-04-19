const adminContainer = document.querySelector('.admin-container');
const ordersGrid = document.getElementById('orders-grid');

// Password Protection
function checkAuth() {
    const isAuth = sessionStorage.getItem('cafe_admin_auth');
    
    if (isAuth === 'true') {
        adminContainer.style.display = 'block';
        loadOrders();
    } else {
        const password = prompt('Please enter owner password to access dashboard:');
        if (password === 'spwaffles') {
            sessionStorage.setItem('cafe_admin_auth', 'true');
            adminContainer.style.display = 'block';
            loadOrders();
        } else {
            alert('Incorrect password. Access denied.');
            window.location.href = 'index.html';
        }
    }
}

function loadOrders() {
    const storedOrders = JSON.parse(localStorage.getItem('cafe_orders') || '[]');

    if (storedOrders.length === 0) {
        ordersGrid.innerHTML = `
            <div class="no-orders">
                <i class='bx bx-receipt' style='font-size: 4rem; margin-bottom: 1rem; opacity: 0.5;'></i>
                <p>No orders received yet.</p>
            </div>
        `;
        return;
    }

    // Sort orders by newest first by making a copy and reversing
    const reversedOrders = [...storedOrders].reverse();

    ordersGrid.innerHTML = '';

    reversedOrders.forEach((order, index) => {
        // Find true index in original array
        const originalIndex = storedOrders.length - 1 - index;

        let itemsHtml = '';
        order.items.forEach(item => {
            itemsHtml += `
                <div>
                    <span>${item.qty}x ${item.name}</span>
                    <span>₹${item.total}</span>
                </div>
            `;
        });

        const isPending = order.status === 'Pending';
        const badgeClass = isPending ? 'status-pending' : 'status-completed';

        const card = document.createElement('div');
        card.className = 'order-card';
        card.innerHTML = `
            <div class="order-header">
                <div>
                    <div class="order-id">${order.id}</div>
                    <div class="order-date">${order.date}</div>
                </div>
                <div>
                    <span class="status-badge ${badgeClass}">${order.status}</span>
                </div>
            </div>
            <div class="order-items">
                ${itemsHtml}
            </div>
            <div class="order-total">
                <span>Total:</span>
                <span style="color: var(--primary-color);">₹${order.total}</span>
            </div>
            <div class="action-btns">
                ${isPending ? `<button class="btn-complete" onclick="markCompleted(${originalIndex})">Mark Completed</button>` : ''}
                <button class="btn-delete" onclick="deleteOrder(${originalIndex})">Delete</button>
            </div>
        `;

        ordersGrid.appendChild(card);
    });
}

function markCompleted(index) {
    const orders = JSON.parse(localStorage.getItem('cafe_orders') || '[]');
    if (orders[index]) {
        orders[index].status = 'Completed';
        localStorage.setItem('cafe_orders', JSON.stringify(orders));
        loadOrders();
    }
}

function deleteOrder(index) {
    if (confirm('Are you sure you want to delete this order?')) {
        const orders = JSON.parse(localStorage.getItem('cafe_orders') || '[]');
        orders.splice(index, 1);
        localStorage.setItem('cafe_orders', JSON.stringify(orders));
        loadOrders();
    }
}

// Initialize
checkAuth();
