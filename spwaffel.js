// Setup paths for images
const ASSERTS = {
    hero: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&q=80"
};

// Inject hero image dynamically since absolute file URI is needed. (Using file:/// protocol for local views)
document.querySelector('.hero').style.backgroundImage = `url("${ASSERTS.hero}")`;

// Dynamic ID counter
let currentId = 1;

// Menu Data representation based on newly provided items
const menuData = [
    // Pocket Waffles
    { id: currentId++, name: "Choclate Overloaded", category: "Pocket Waffles", price: 90, desc: "A chocolate lover's delight." },
    { id: currentId++, name: "Kitkat Nutella Waffle", category: "Pocket Waffles", price: 110, desc: "Loaded with KitKat chunks and Nutella." },
    { id: currentId++, name: "Kiki & Oreo Waffle", category: "Pocket Waffles", price: 130, desc: "Crunchy Oreo and KiKi goodness." },
    { id: currentId++, name: "Caramel Choclate Waffle", category: "Pocket Waffles", price: 130, desc: "Sweet caramel merged with chocolate." },
    { id: currentId++, name: "Dark & White Fantasy", category: "Pocket Waffles", price: 120, desc: "Dark and white chocolate blended." },
    { id: currentId++, name: "Rocky Road Fantasy", category: "Pocket Waffles", price: 120, desc: "Nuts, marshmallows, and thick chocolate." },
    { id: currentId++, name: "Biscoff Choclate Waffle", category: "Pocket Waffles", price: 140, desc: "Premium Lotus Biscoff flavor." },
    { id: currentId++, name: "Marvel Hazulnut", category: "Pocket Waffles", price: 120, desc: "Hazelnut spread delight." },
    { id: currentId++, name: "Pista Kunafa Waffle", category: "Pocket Waffles", price: 140, desc: "Rich Pistachio and crispy Kunafa." },
    { id: currentId++, name: "Tripple Choclate Waffle", category: "Pocket Waffles", price: 100, desc: "Three layers of chocolate magic." },
    { id: currentId++, name: "Blueberry Fantasy", category: "Pocket Waffles", price: 120, desc: "Fresh blueberry waffle." },
    { id: currentId++, name: "Butterscotch Waffle", category: "Pocket Waffles", price: 130, desc: "Crunchy butterscotch goodness." },

    // French Fries
    { id: currentId++, name: "Classic Salted Fries", category: "French Fries", price: 50, desc: "Crispy golden salted fries." },
    { id: currentId++, name: "Classic Chili Lime Fries", category: "French Fries", price: 60, desc: "Tangy and spicy fries." },

    // Desert Bowls
    { id: currentId++, name: "Milky & Dark Chocalte", category: "Desert Bowls", price: 70, desc: "Rich mix of milk and dark chocolate." },
    { id: currentId++, name: "Dark Choclate Bowl", category: "Desert Bowls", price: 60, desc: "Rich dark chocolate dessert bowl." },
    { id: currentId++, name: "Almond Bowl", category: "Desert Bowls", price: 80, desc: "Loaded with fresh toasted almonds." },
    { id: currentId++, name: "Nutella Choclate Bowl", category: "Desert Bowls", price: 80, desc: "Thick Nutella dessert load." },
    { id: currentId++, name: "Kitkat & Oreo Bowl", category: "Desert Bowls", price: 80, desc: "Crushed Oreo and Kitkat." },
    { id: currentId++, name: "Blueberry Bowl", category: "Desert Bowls", price: 90, desc: "Fresh blueberries and cream." },
    { id: currentId++, name: "Orange Bowl", category: "Desert Bowls", price: 80, desc: "Citrus orange bliss." },
    { id: currentId++, name: "Strawberry Bowl (Seasonal)", category: "Desert Bowls", price: 90, desc: "Fresh seasonal strawberries." },
    { id: currentId++, name: "Lotti Choco Pie Bowl", category: "Desert Bowls", price: 90, desc: "Lotte choco pie mashed." },
    { id: currentId++, name: "Rosy Cream Bowl", category: "Desert Bowls", price: 70, desc: "Rose flavored cream and dessert." },
    { id: currentId++, name: "SP Special Bowl", category: "Desert Bowls", price: 90, desc: "Our signature dessert mix." },

    // Sandwitches
    { id: currentId++, name: "Tandori Sandwitch", category: "Sandwitches", price: 100, desc: "Spiced tandoori grilled sandwich." },
    { id: currentId++, name: "Chilli Cheese Sandwitch", category: "Sandwitches", price: 120, desc: "Spicy and insanely cheesy." },
    { id: currentId++, name: "Bombay Sandwitch", category: "Sandwitches", price: 110, desc: "Classic street style club sandwich." },
    { id: currentId++, name: "Jumbo Mixed Sandwitch", category: "Sandwitches", price: 130, desc: "Fully loaded mega sandwich." },
    { id: currentId++, name: "Volcano Sandwitch", category: "Sandwitches", price: 120, desc: "Spicy overflowing volcano sandwich." },
    { id: currentId++, name: "Choclate Sandwitch", category: "Sandwitches", price: 100, desc: "Sweet chocolate grilled sandwich." },

    // Mini Waffles
    { id: currentId++, name: "Dark Choclate", category: "Mini Waffles", price: 60, desc: "Mini dark chocolate waffle." },
    { id: currentId++, name: "Milk Choclate", category: "Mini Waffles", price: 60, desc: "Mini milk chocolate waffle." },
    { id: currentId++, name: "Tripple Classic", category: "Mini Waffles", price: 70, desc: "Three flavors classic mini waffle." },
    { id: currentId++, name: "Kiki & Oreo", category: "Mini Waffles", price: 70, desc: "Crunchy Oreo mini waffle." },
    { id: currentId++, name: "Nutella Waffle", category: "Mini Waffles", price: 70, desc: "Nutella loaded mini waffle." },
    { id: currentId++, name: "Red Velvet Fantasy", category: "Mini Waffles", price: 80, desc: "Red velvet themed mini waffle." },

    // Bubble Waffles
    { id: currentId++, name: "Cream & Choco", category: "Bubble Waffles", price: 130, desc: "Whipped cream and rich chocolate bubble waffle." },
    { id: currentId++, name: "Nutella & Berry", category: "Bubble Waffles", price: 140, desc: "Nutella and fresh berries bubble waffle." },
    { id: currentId++, name: "Nutella Pistachio", category: "Bubble Waffles", price: 130, desc: "Rich pistachio and Nutella bubble waffle." },
    { id: currentId++, name: "Mix Berry Waffle", category: "Bubble Waffles", price: 140, desc: "Loaded with assorted berries bubble waffle." },
    { id: currentId++, name: "Oreo Dinosaur", category: "Bubble Waffles", price: 130, desc: "Massive Oreo overload bubble waffle." },
    { id: currentId++, name: "Biscoff Dinosaur", category: "Bubble Waffles", price: 140, desc: "Massive Biscoff delight bubble waffle." },

    // Mini Pancakes
    { id: currentId++, name: "Triple Choclate (8 PC)", category: "Mini Pancakes", price: 60, desc: "8 pieces of fluffy triple chocolate pancakes." },
    { id: currentId++, name: "Triple Choclate (12 PC)", category: "Mini Pancakes", price: 80, desc: "12 pieces of fluffy triple chocolate pancakes." },
    { id: currentId++, name: "Marvel Hazulnut (8 PC)", category: "Mini Pancakes", price: 60, desc: "8 pieces of hazelnut spread delight pancakes." },
    { id: currentId++, name: "Marvel Hazulnut (12 PC)", category: "Mini Pancakes", price: 80, desc: "12 pieces of hazelnut spread delight pancakes." },
    { id: currentId++, name: "Dark Temptation (8 PC)", category: "Mini Pancakes", price: 60, desc: "8 pieces of rich dark chocolate pancakes." },
    { id: currentId++, name: "Dark Temptation (12 PC)", category: "Mini Pancakes", price: 80, desc: "12 pieces of rich dark chocolate pancakes." },
    { id: currentId++, name: "Rose Choclate (8 PC)", category: "Mini Pancakes", price: 60, desc: "8 pieces of rose flavored chocolate pancakes." },
    { id: currentId++, name: "Rose Choclate (12 PC)", category: "Mini Pancakes", price: 70, desc: "12 pieces of rose flavored chocolate pancakes." },
    { id: currentId++, name: "Milk Temptation (8 PC)", category: "Mini Pancakes", price: 60, desc: "8 pieces of smooth milk chocolate pancakes." },
    { id: currentId++, name: "Milk Temptation (12 PC)", category: "Mini Pancakes", price: 70, desc: "12 pieces of smooth milk chocolate pancakes." },
    { id: currentId++, name: "Dark & Milky Beast (8 PC)", category: "Mini Pancakes", price: 70, desc: "8 pieces of best of dark and milk chocolate pancakes." },
    { id: currentId++, name: "Dark & Milky Beast (12 PC)", category: "Mini Pancakes", price: 80, desc: "12 pieces of best of dark and milk chocolate pancakes." },

    // Cold Coffe
    { id: currentId++, name: "Cold Coffe", category: "Cold Coffe", price: 80, desc: "Thick creamy cold coffee with chocolate drizzle." },
    { id: currentId++, name: "Cold Coffe with Icecream", category: "Cold Coffe", price: 100, desc: "Cold coffee topped with a huge vanilla scoop." },
    { id: currentId++, name: "Hot Coffe", category: "Cold Coffe", price: 50, desc: "Classic hot brewed coffee." },

    // Icecream
    { id: currentId++, name: "Butter Scotch", category: "Icecream", price: 35, desc: "Classic butter scotch scoop." },
    { id: currentId++, name: "Vanilla Ice Cream", category: "Icecream", price: 30, desc: "Creamy vanilla." },
    { id: currentId++, name: "Kiki & Oreo Icecream", category: "Icecream", price: 40, desc: "Oreo chunks in cream." },
    { id: currentId++, name: "Choclate Icecream", category: "Icecream", price: 35, desc: "Rich chocolate scoop." },

    // Thick Shakes
    { id: currentId++, name: "Kitkat Mixed Shake", category: "Thick Shakes", price: 100, desc: "Thick milk shake loaded with KitKat." },
    { id: currentId++, name: "Oreo & Kiki Shake", category: "Thick Shakes", price: 110, desc: "Crunchy Oreo and Kiki." },
    { id: currentId++, name: "Strawberry Milk Shake (Seasonal)", category: "Thick Shakes", price: 100, desc: "Sweet strawberry thick shake." },
    { id: currentId++, name: "Dark Fantasy Milk Shake", category: "Thick Shakes", price: 120, desc: "Blended Dark Fantasy cookies." },
    { id: currentId++, name: "Dry Fruit Milk Shake", category: "Thick Shakes", price: 120, desc: "Healthy loaded dry fruit shake." },

    // Cake Jars
    { id: currentId++, name: "Vanilla Oreo Jar", category: "Cake Jars", price: 90, desc: "Layered oreo and vanilla cake." },
    { id: currentId++, name: "Black Forest Jar", category: "Cake Jars", price: 90, desc: "Classic black forest in a jar." },
    { id: currentId++, name: "Lotus Biscoff Jar", category: "Cake Jars", price: 100, desc: "Premium Biscoff layered jar." },
    { id: currentId++, name: "Double Choclate Jar", category: "Cake Jars", price: 90, desc: "Overloaded chocolate cake jar." },

    // Smooties
    { id: currentId++, name: "Berry Smoothie", category: "Smooties", price: 90, desc: "Fresh mixed berry blend." },
    { id: currentId++, name: "Choclate Banana", category: "Smooties", price: 80, desc: "Classic choco-banana." },
    { id: currentId++, name: "Strawberry Smoothie", category: "Smooties", price: 100, desc: "Seasonal strawberry smoothie." },

    // Combo
    { id: currentId++, name: "Sandwitch + Cold Coffe + French Fries", category: "Combo", price: 200, desc: "The perfect munch combo." },
    { id: currentId++, name: "Pocket Waffle + Cold Coffe + French Fries", category: "Combo", price: 170, desc: "Sweet, salty and refreshing combo." }
];

let cart = [];

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const tabBtns = document.querySelectorAll('.tab-btn');
const cartIcon = document.getElementById('cart-icon');
const cartOverlay = document.getElementById('cart-overlay');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const checkoutBtn = document.getElementById('checkout-btn');
const orderModal = document.getElementById('order-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const receiptContainer = document.getElementById('receipt');

// Initialize App
function init() {
    renderMenu("all");
    setupEventListeners();
}

// Render Menu Items
function renderMenu(category) {
    menuGrid.innerHTML = '';

    const filteredMenu = category === 'all'
        ? menuData
        : menuData.filter(item => item.category === category);

    filteredMenu.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p class="desc">${item.desc}</p>
            <div class="card-footer">
                <span class="price">₹${item.price}</span>
                <button class="add-btn" onclick="addToCart(${item.id})">
                    <i class='bx bx-plus'></i>
                </button>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderMenu(e.target.getAttribute('data-category'));
        });
    });

    // Cart Toggle
    cartIcon.addEventListener('click', () => cartOverlay.classList.add('show'));
    closeCart.addEventListener('click', () => cartOverlay.classList.remove('show'));
    cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) cartOverlay.classList.remove('show');
    });

    // Checkout
    checkoutBtn.addEventListener('click', handleCheckout);

    // Close Modal
    closeModalBtn.addEventListener('click', () => {
        orderModal.classList.remove('show');
        cart = [];
        updateCartUI();
    });
}

// Cart Functions
window.addToCart = function (id) {
    const item = menuData.find(i => i.id === id);
    const existing = cart.find(c => c.id === id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    // Add micro animation class to cart icon
    cartIcon.style.transform = 'scale(1.3)';
    setTimeout(() => cartIcon.style.transform = 'scale(1)', 200);

    updateCartUI();
};

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(c => c.id !== id);
        }
    }
    updateCartUI();
}

function removeItem(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.qty;
        totalPrice += (item.qty * item.price);

        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <div class="item-info">
                <h4>${item.name}</h4>
                <div class="item-price">₹${item.price}</div>
            </div>
            <div class="item-controls">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removeItem(${item.id})"><i class='bx bx-trash'></i></button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });

    cartCount.innerText = totalItems;
    cartTotalPrice.innerText = `₹${totalPrice}`;
}

// Checkout Logic
function handleCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    cartOverlay.classList.remove('show');

    // Generate Receipt
    receiptContainer.innerHTML = '';
    let total = 0;
    const orderItems = [];
    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        orderItems.push({ name: item.name, qty: item.qty, price: item.price, total: itemTotal });
        receiptContainer.innerHTML += `
            <div class="receipt-item">
                <span>${item.qty}x ${item.name}</span>
                <span>₹${itemTotal}</span>
            </div>
        `;
    });

    receiptContainer.innerHTML += `
        <div class="receipt-total">
            <span>Total Paid</span>
            <span>₹${total}</span>
        </div>
    `;

    // Save to LocalStorage for Admin Dashboard
    const newOrder = {
        id: 'ORD-' + Math.floor(Math.random() * 1000000),
        date: new Date().toLocaleString(),
        items: orderItems,
        total: total,
        status: 'Pending'
    };
    const storedOrders = JSON.parse(localStorage.getItem('cafe_orders') || '[]');
    storedOrders.push(newOrder);
    localStorage.setItem('cafe_orders', JSON.stringify(storedOrders));

    orderModal.classList.add('show');
}

// Start
init();

