// Setup paths for images
const ASSERTS = {
    hero: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&q=80",
    pancakes: "https://images.unsplash.com/photo-1528207776546-384111d0abe1?w=500&q=80",
    waffle: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&q=80",
    coffee: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500&q=80",
    bowl: "https://images.unsplash.com/photo-1563805042-7684c8a9e9ce?w=500&q=80",
    sandwich: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80",
    fries: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&q=80",
    icecream: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&q=80",
    cakejar: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&q=80",
    shake: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
    smoothie: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=500&q=80",
    combo: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=500&q=80",
    biscoff: "images/biscoff.jpg",
    berry: "images/blueberry.jpg",
    triple_choc: "images/triple_choc.jpg",
    butterscotch: "images/butterscotch.jpg",
    oreo: "images/oreo.jpg",
    blueberry: "images/blueberry.jpg"
};

// Inject hero image dynamically since absolute file URI is needed. (Using file:/// protocol for local views)
document.querySelector('.hero').style.backgroundImage = `url("${ASSERTS.hero}")`;

// Dynamic ID counter
let currentId = 1;

// Menu Data representation based on newly provided items
const menuData = [
    // Pocket Waffles
    { id: currentId++, name: "Choclate Overloaded", category: "Pocket Waffles", price: 90, desc: "A chocolate lover's delight.", img: ASSERTS.choc_overload },
    { id: currentId++, name: "Kitkat Nutella Waffle", category: "Pocket Waffles", price: 110, desc: "Loaded with KitKat chunks and Nutella.", img: ASSERTS.kitkat },
    { id: currentId++, name: "Kiki & Oreo Waffle", category: "Pocket Waffles", price: 130, desc: "Crunchy Oreo and KiKi goodness.", img: ASSERTS.oreo_dino },
    { id: currentId++, name: "Caramel Choclate Waffle", category: "Pocket Waffles", price: 130, desc: "Sweet caramel merged with chocolate.", img: ASSERTS.caramel },
    { id: currentId++, name: "Dark & White Fantasy", category: "Pocket Waffles", price: 120, desc: "Dark and white chocolate blended.", img: ASSERTS.fantasy },
    { id: currentId++, name: "Rocky Road Fantasy", category: "Pocket Waffles", price: 120, desc: "Nuts, marshmallows, and thick chocolate.", img: ASSERTS.rocky_road },
    { id: currentId++, name: "Biscoff Choclate Waffle", category: "Pocket Waffles", price: 140, desc: "Premium Lotus Biscoff flavor.", img: ASSERTS.biscoff },
    { id: currentId++, name: "Marvel Hazulnut", category: "Pocket Waffles", price: 120, desc: "Hazelnut spread delight.", img: ASSERTS.waffle },
    { id: currentId++, name: "Pista Kunafa Waffle", category: "Pocket Waffles", price: 140, desc: "Rich Pistachio and crispy Kunafa.", img: ASSERTS.waffle },
    { id: currentId++, name: "Tripple Choclate Waffle", category: "Pocket Waffles", price: 100, desc: "Three layers of chocolate magic.", img: ASSERTS.triple_choc },
    { id: currentId++, name: "Blueberry Fantasy", category: "Pocket Waffles", price: 120, desc: "Fresh blueberry waffle.", img: ASSERTS.blueberry },
    { id: currentId++, name: "Butterscotch Waffle", category: "Pocket Waffles", price: 130, desc: "Crunchy butterscotch goodness.", img: ASSERTS.butterscotch },

    // French Fries
    { id: currentId++, name: "Classic Salted Fries", category: "French Fries", price: 50, desc: "Crispy golden salted fries.", img: ASSERTS.fries },
    { id: currentId++, name: "Classic Chili Lime Fries", category: "French Fries", price: 60, desc: "Tangy and spicy fries.", img: ASSERTS.fries },

    // Desert Bowls
    { id: currentId++, name: "Milky & Dark Chocalte", category: "Desert Bowls", price: 70, desc: "Rich mix of milk and dark chocolate.", img: ASSERTS.bowl },
    { id: currentId++, name: "Dark Choclate Bowl", category: "Desert Bowls", price: 60, desc: "Rich dark chocolate dessert bowl.", img: ASSERTS.bowl },
    { id: currentId++, name: "Almond Bowl", category: "Desert Bowls", price: 80, desc: "Loaded with fresh toasted almonds.", img: ASSERTS.bowl },
    { id: currentId++, name: "Nutella Choclate Bowl", category: "Desert Bowls", price: 80, desc: "Thick Nutella dessert load.", img: ASSERTS.bowl },
    { id: currentId++, name: "Kitkat & Oreo Bowl", category: "Desert Bowls", price: 80, desc: "Crushed Oreo and Kitkat.", img: ASSERTS.bowl },
    { id: currentId++, name: "Blueberry Bowl", category: "Desert Bowls", price: 90, desc: "Fresh blueberries and cream.", img: ASSERTS.bowl },
    { id: currentId++, name: "Orange Bowl", category: "Desert Bowls", price: 80, desc: "Citrus orange bliss.", img: ASSERTS.bowl },
    { id: currentId++, name: "Strawberry Bowl (Seasonal)", category: "Desert Bowls", price: 90, desc: "Fresh seasonal strawberries.", img: ASSERTS.bowl },
    { id: currentId++, name: "Lotti Choco Pie Bowl", category: "Desert Bowls", price: 90, desc: "Lotte choco pie mashed.", img: ASSERTS.bowl },
    { id: currentId++, name: "Rosy Cream Bowl", category: "Desert Bowls", price: 70, desc: "Rose flavored cream and dessert.", img: ASSERTS.bowl },
    { id: currentId++, name: "SP Special Bowl", category: "Desert Bowls", price: 90, desc: "Our signature dessert mix.", img: ASSERTS.bowl },

    // Sandwitches
    { id: currentId++, name: "Tandori Sandwitch", category: "Sandwitches", price: 100, desc: "Spiced tandoori grilled sandwich.", img: ASSERTS.sandwich },
    { id: currentId++, name: "Chilli Cheese Sandwitch", category: "Sandwitches", price: 120, desc: "Spicy and insanely cheesy.", img: ASSERTS.sandwich },
    { id: currentId++, name: "Bombay Sandwitch", category: "Sandwitches", price: 110, desc: "Classic street style club sandwich.", img: ASSERTS.sandwich },
    { id: currentId++, name: "Jumbo Mixed Sandwitch", category: "Sandwitches", price: 130, desc: "Fully loaded mega sandwich.", img: ASSERTS.sandwich },
    { id: currentId++, name: "Volcano Sandwitch", category: "Sandwitches", price: 120, desc: "Spicy overflowing volcano sandwich.", img: ASSERTS.sandwich },
    { id: currentId++, name: "Choclate Sandwitch", category: "Sandwitches", price: 100, desc: "Sweet chocolate grilled sandwich.", img: ASSERTS.sandwich },

    // Mini Waffles
    { id: currentId++, name: "Dark Choclate", category: "Mini Waffles", price: 60, desc: "Mini dark chocolate waffle.", img: ASSERTS.waffle },
    { id: currentId++, name: "Milk Choclate", category: "Mini Waffles", price: 60, desc: "Mini milk chocolate waffle.", img: ASSERTS.waffle },
    { id: currentId++, name: "Tripple Classic", category: "Mini Waffles", price: 70, desc: "Three flavors classic mini waffle.", img: ASSERTS.waffle },
    { id: currentId++, name: "Kiki & Oreo", category: "Mini Waffles", price: 70, desc: "Crunchy Oreo mini waffle.", img: ASSERTS.waffle },
    { id: currentId++, name: "Nutella Waffle", category: "Mini Waffles", price: 70, desc: "Nutella loaded mini waffle.", img: ASSERTS.nutella },
    { id: currentId++, name: "Red Velvet Fantasy", category: "Mini Waffles", price: 80, desc: "Red velvet themed mini waffle.", img: ASSERTS.waffle },

    // Bubble Waffles
    { id: currentId++, name: "Cream & Choco", category: "Bubble Waffles", price: 130, desc: "Whipped cream and rich chocolate bubble waffle.", img: ASSERTS.cream_choco },
    { id: currentId++, name: "Nutella & Berry", category: "Bubble Waffles", price: 140, desc: "Nutella and fresh berries bubble waffle.", img: ASSERTS.berry },
    { id: currentId++, name: "Nutella Pistachio", category: "Bubble Waffles", price: 130, desc: "Rich pistachio and Nutella bubble waffle.", img: ASSERTS.waffle },
    { id: currentId++, name: "Mix Berry Waffle", category: "Bubble Waffles", price: 140, desc: "Loaded with assorted berries bubble waffle.", img: ASSERTS.berry },
    { id: currentId++, name: "Oreo Dinosaur", category: "Bubble Waffles", price: 130, desc: "Massive Oreo overload bubble waffle.", img: ASSERTS.oreo_dino },
    { id: currentId++, name: "Biscoff Dinosaur", category: "Bubble Waffles", price: 140, desc: "Massive Biscoff delight bubble waffle.", img: ASSERTS.biscoff_dino },

    // Mini Pancakes
    { id: currentId++, name: "Triple Choclate (8 PC)", category: "Mini Pancakes", price: 60, desc: "8 pieces of fluffy triple chocolate pancakes.", img: ASSERTS.pancakes },
    { id: currentId++, name: "Triple Choclate (12 PC)", category: "Mini Pancakes", price: 80, desc: "12 pieces of fluffy triple chocolate pancakes.", img: ASSERTS.pancakes },
    { id: currentId++, name: "Marvel Hazulnut (8 PC)", category: "Mini Pancakes", price: 60, desc: "8 pieces of hazelnut spread delight pancakes.", img: ASSERTS.pancakes },
    { id: currentId++, name: "Marvel Hazulnut (12 PC)", category: "Mini Pancakes", price: 80, desc: "12 pieces of hazelnut spread delight pancakes.", img: ASSERTS.pancakes },
    { id: currentId++, name: "Dark Temptation (8 PC)", category: "Mini Pancakes", price: 60, desc: "8 pieces of rich dark chocolate pancakes.", img: ASSERTS.pancakes },
    { id: currentId++, name: "Dark Temptation (12 PC)", category: "Mini Pancakes", price: 80, desc: "12 pieces of rich dark chocolate pancakes.", img: ASSERTS.pancakes },
    { id: currentId++, name: "Rose Choclate (8 PC)", category: "Mini Pancakes", price: 60, desc: "8 pieces of rose flavored chocolate pancakes.", img: ASSERTS.pancakes },
    { id: currentId++, name: "Rose Choclate (12 PC)", category: "Mini Pancakes", price: 70, desc: "12 pieces of rose flavored chocolate pancakes.", img: ASSERTS.pancakes },
    { id: currentId++, name: "Milk Temptation (8 PC)", category: "Mini Pancakes", price: 60, desc: "8 pieces of smooth milk chocolate pancakes.", img: ASSERTS.pancakes },
    { id: currentId++, name: "Milk Temptation (12 PC)", category: "Mini Pancakes", price: 70, desc: "12 pieces of smooth milk chocolate pancakes.", img: ASSERTS.pancakes },
    { id: currentId++, name: "Dark & Milky Beast (8 PC)", category: "Mini Pancakes", price: 70, desc: "8 pieces of best of dark and milk chocolate pancakes.", img: ASSERTS.pancakes },
    { id: currentId++, name: "Dark & Milky Beast (12 PC)", category: "Mini Pancakes", price: 80, desc: "12 pieces of best of dark and milk chocolate pancakes.", img: ASSERTS.pancakes },

    // Cold Coffe
    { id: currentId++, name: "Cold Coffe", category: "Cold Coffe", price: 80, desc: "Thick creamy cold coffee with chocolate drizzle.", img: ASSERTS.coffee },
    { id: currentId++, name: "Cold Coffe with Icecream", category: "Cold Coffe", price: 100, desc: "Cold coffee topped with a huge vanilla scoop.", img: ASSERTS.coffee },
    { id: currentId++, name: "Hot Coffe", category: "Cold Coffe", price: 50, desc: "Classic hot brewed coffee.", img: ASSERTS.coffee },

    // Icecream
    { id: currentId++, name: "Butter Scotch", category: "Icecream", price: 35, desc: "Classic butter scotch scoop.", img: ASSERTS.icecream },
    { id: currentId++, name: "Vanilla Ice Cream", category: "Icecream", price: 30, desc: "Creamy vanilla.", img: ASSERTS.icecream },
    { id: currentId++, name: "Kiki & Oreo Icecream", category: "Icecream", price: 40, desc: "Oreo chunks in cream.", img: ASSERTS.icecream },
    { id: currentId++, name: "Choclate Icecream", category: "Icecream", price: 35, desc: "Rich chocolate scoop.", img: ASSERTS.icecream },

    // Thick Shakes
    { id: currentId++, name: "Kitkat Mixed Shake", category: "Thick Shakes", price: 100, desc: "Thick milk shake loaded with KitKat.", img: ASSERTS.shake },
    { id: currentId++, name: "Oreo & Kiki Shake", category: "Thick Shakes", price: 110, desc: "Crunchy Oreo and Kiki.", img: ASSERTS.shake },
    { id: currentId++, name: "Strawberry Milk Shake (Seasonal)", category: "Thick Shakes", price: 100, desc: "Sweet strawberry thick shake.", img: ASSERTS.shake },
    { id: currentId++, name: "Dark Fantasy Milk Shake", category: "Thick Shakes", price: 120, desc: "Blended Dark Fantasy cookies.", img: ASSERTS.shake },
    { id: currentId++, name: "Dry Fruit Milk Shake", category: "Thick Shakes", price: 120, desc: "Healthy loaded dry fruit shake.", img: ASSERTS.shake },

    // Cake Jars
    { id: currentId++, name: "Vanilla Oreo Jar", category: "Cake Jars", price: 90, desc: "Layered oreo and vanilla cake.", img: ASSERTS.cakejar },
    { id: currentId++, name: "Black Forest Jar", category: "Cake Jars", price: 90, desc: "Classic black forest in a jar.", img: ASSERTS.cakejar },
    { id: currentId++, name: "Lotus Biscoff Jar", category: "Cake Jars", price: 100, desc: "Premium Biscoff layered jar.", img: ASSERTS.cakejar },
    { id: currentId++, name: "Double Choclate Jar", category: "Cake Jars", price: 90, desc: "Overloaded chocolate cake jar.", img: ASSERTS.cakejar },

    // Smooties
    { id: currentId++, name: "Berry Smoothie", category: "Smooties", price: 90, desc: "Fresh mixed berry blend.", img: ASSERTS.smoothie },
    { id: currentId++, name: "Choclate Banana", category: "Smooties", price: 80, desc: "Classic choco-banana.", img: ASSERTS.smoothie },
    { id: currentId++, name: "Strawberry Smoothie", category: "Smooties", price: 100, desc: "Seasonal strawberry smoothie.", img: ASSERTS.smoothie },

    // Combo
    { id: currentId++, name: "Sandwitch + Cold Coffe + French Fries", category: "Combo", price: 200, desc: "The perfect munch combo.", img: ASSERTS.combo },
    { id: currentId++, name: "Pocket Waffle + Cold Coffe + French Fries", category: "Combo", price: 170, desc: "Sweet, salty and refreshing combo.", img: ASSERTS.combo }
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

        const fileImageUrl = item.img.startsWith('http') ? item.img : `file:///${item.img.replace(/\\/g, '/')}`;
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <img src="${fileImageUrl}" alt="${item.name}">
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
