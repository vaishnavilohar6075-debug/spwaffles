// Cafe Website Script - jQuery & AJAX Version

$(document).ready(function () {
    // Local Fallback Data (In case AJAX is blocked on file:// protocol)
    const localMenuData = [
        { "id": 1, "name": "Choclate Overloaded", "category": "Pocket Waffles", "price": 90, "desc": "A chocolate lover's delight." },
        { "id": 2, "name": "Kitkat Nutella Waffle", "category": "Pocket Waffles", "price": 110, "desc": "Loaded with KitKat chunks and Nutella." },
        { "id": 3, "name": "Kiki & Oreo Waffle", "category": "Pocket Waffles", "price": 130, "desc": "Crunchy Oreo and KiKi goodness." },
        { "id": 4, "name": "Caramel Choclate Waffle", "category": "Pocket Waffles", "price": 130, "desc": "Sweet caramel merged with chocolate." },
        { "id": 5, "name": "Dark & White Fantasy", "category": "Pocket Waffles", "price": 120, "desc": "Dark and white chocolate blended." },
        { "id": 6, "name": "Rocky Road Fantasy", "category": "Pocket Waffles", "price": 120, "desc": "Nuts, marshmallows, and thick chocolate." },
        { "id": 7, "name": "Biscoff Choclate Waffle", "category": "Pocket Waffles", "price": 140, "desc": "Premium Lotus Biscoff flavor." },
        { "id": 8, "name": "Marvel Hazulnut", "category": "Pocket Waffles", "price": 120, "desc": "Hazelnut spread delight." },
        { "id": 9, "name": "Pista Kunafa Waffle", "category": "Pocket Waffles", "price": 140, "desc": "Rich Pistachio and crispy Kunafa." },
        { "id": 10, "name": "Tripple Choclate Waffle", "category": "Pocket Waffles", "price": 100, "desc": "Three layers of chocolate magic." },
        { "id": 11, "name": "Blueberry Fantasy", "category": "Pocket Waffles", "price": 120, "desc": "Fresh blueberry waffle." },
        { "id": 12, "name": "Butterscotch Waffle", "category": "Pocket Waffles", "price": 130, "desc": "Crunchy butterscotch goodness." },
        { "id": 13, "name": "Classic Salted Fries", "category": "French Fries", "price": 50, "desc": "Crispy golden salted fries." },
        { "id": 14, "name": "Classic Chili Lime Fries", "category": "French Fries", "price": 60, "desc": "Tangy and spicy fries." },
        { "id": 15, "name": "Milky & Dark Chocalte", "category": "Desert Bowls", "price": 70, "desc": "Rich mix of milk and dark chocolate." },
        { "id": 16, "name": "Dark Choclate Bowl", "category": "Desert Bowls", "price": 60, "desc": "Rich dark chocolate dessert bowl." },
        { "id": 17, "name": "Almond Bowl", "category": "Desert Bowls", "price": 80, "desc": "Loaded with fresh toasted almonds." },
        { "id": 18, "name": "Nutella Choclate Bowl", "category": "Desert Bowls", "price": 80, "desc": "Thick Nutella dessert load." },
        { "id": 19, "name": "Kitkat & Oreo Bowl", "category": "Desert Bowls", "price": 80, "desc": "Crushed Oreo and Kitkat." },
        { "id": 20, "name": "Blueberry Bowl", "category": "Desert Bowls", "price": 90, "desc": "Fresh blueberries and cream." },
        { "id": 21, "name": "Orange Bowl", "category": "Desert Bowls", "price": 80, "desc": "Citrus orange bliss." },
        { "id": 22, "name": "Strawberry Bowl (Seasonal)", "category": "Desert Bowls", "price": 90, "desc": "Fresh seasonal strawberries." },
        { "id": 23, "name": "Lotti Choco Pie Bowl", "category": "Desert Bowls", "price": 90, "desc": "Lotte choco pie mashed." },
        { "id": 24, "name": "Rosy Cream Bowl", "category": "Desert Bowls", "price": 70, "desc": "Rose flavored cream and dessert." },
        { "id": 25, "name": "SP Special Bowl", "category": "Desert Bowls", "price": 90, "desc": "Our signature dessert mix." },
        { "id": 26, "name": "Tandori Sandwitch", "category": "Sandwitches", "price": 100, "desc": "Spiced tandoori grilled sandwich." },
        { "id": 27, "name": "Chilli Cheese Sandwitch", "category": "Sandwitches", "price": 120, "desc": "Spicy and insanely cheesy." },
        { "id": 28, "name": "Bombay Sandwitch", "category": "Sandwitches", "price": 110, "desc": "Classic street style club sandwich." },
        { "id": 29, "name": "Jumbo Mixed Sandwitch", "category": "Sandwitches", "price": 130, "desc": "Fully loaded mega sandwich." },
        { "id": 30, "name": "Volcano Sandwitch", "category": "Sandwitches", "price": 120, "desc": "Spicy overflowing volcano sandwich." },
        { "id": 31, "name": "Choclate Sandwitch", "category": "Sandwitches", "price": 100, "desc": "Sweet chocolate grilled sandwich." },
        { "id": 32, "name": "Dark Choclate", "category": "Mini Waffles", "price": 60, "desc": "Mini dark chocolate waffle." },
        { "id": 33, "name": "Milk Choclate", "category": "Mini Waffles", "price": 60, "desc": "Mini milk chocolate waffle." },
        { "id": 34, "name": "Tripple Classic", "category": "Mini Waffles", "price": 70, "desc": "Three flavors classic mini waffle." },
        { "id": 35, "name": "Kiki & Oreo", "category": "Mini Waffles", "price": 70, "desc": "Crunchy Oreo mini waffle." },
        { "id": 36, "name": "Nutella Waffle", "category": "Mini Waffles", "price": 70, "desc": "Nutella loaded mini waffle." },
        { "id": 37, "name": "Red Velvet Fantasy", "category": "Mini Waffles", "price": 80, "desc": "Red velvet themed mini waffle." },
        { "id": 38, "name": "Cream & Choco", "category": "Bubble Waffles", "price": 130, "desc": "Whipped cream and rich chocolate bubble waffle." },
        { "id": 39, "name": "Nutella & Berry", "category": "Bubble Waffles", "price": 140, "desc": "Nutella and fresh berries bubble waffle." },
        { "id": 40, "name": "Nutella Pistachio", "category": "Bubble Waffles", "price": 130, "desc": "Rich pistachio and Nutella bubble waffle." },
        { "id": 41, "name": "Mix Berry Waffle", "category": "Bubble Waffles", "price": 140, "desc": "Loaded with assorted berries bubble waffle." },
        { "id": 42, "name": "Oreo Dinosaur", "category": "Bubble Waffles", "price": 130, "desc": "Massive Oreo overload bubble waffle." },
        { "id": 43, "name": "Biscoff Dinosaur", "category": "Bubble Waffles", "price": 140, "desc": "Massive Biscoff delight bubble waffle." },
        { "id": 44, "name": "Triple Choclate (8 PC)", "category": "Mini Pancakes", "price": 60, "desc": "8 pieces of fluffy triple chocolate pancakes." },
        { "id": 45, "name": "Triple Choclate (12 PC)", "category": "Mini Pancakes", "price": 80, "desc": "12 pieces of fluffy triple chocolate pancakes." },
        { "id": 46, "name": "Marvel Hazulnut (8 PC)", "category": "Mini Pancakes", "price": 60, "desc": "8 pieces of hazelnut spread delight pancakes." },
        { "id": 47, "name": "Marvel Hazulnut (12 PC)", "category": "Mini Pancakes", "price": 80, "desc": "12 pieces of hazelnut spread delight pancakes." },
        { "id": 48, "name": "Dark Temptation (8 PC)", "category": "Mini Pancakes", "price": 60, "desc": "8 pieces of rich dark chocolate pancakes." },
        { "id": 49, "name": "Dark Temptation (12 PC)", "category": "Mini Pancakes", "price": 80, "desc": "12 pieces of rich dark chocolate pancakes." },
        { "id": 50, "name": "Rose Choclate (8 PC)", "category": "Mini Pancakes", "price": 60, "desc": "8 pieces of rose flavored chocolate pancakes." },
        { "id": 51, "name": "Rose Choclate (12 PC)", "category": "Mini Pancakes", "price": 70, "desc": "12 pieces of rose flavored chocolate pancakes." },
        { "id": 52, "name": "Milk Temptation (8 PC)", "category": "Mini Pancakes", "price": 60, "desc": "8 pieces of smooth milk chocolate pancakes." },
        { "id": 53, "name": "Milk Temptation (12 PC)", "category": "Mini Pancakes", "price": 70, "desc": "12 pieces of smooth milk chocolate pancakes." },
        { "id": 54, "name": "Dark & Milky Beast (8 PC)", "category": "Mini Pancakes", "price": 70, "desc": "8 pieces of best of dark and milk chocolate pancakes." },
        { "id": 55, "name": "Dark & Milky Beast (12 PC)", "category": "Mini Pancakes", "price": 80, "desc": "12 pieces of best of dark and milk chocolate pancakes." },
        { "id": 56, "name": "Cold Coffe", "category": "Cold Coffe", "price": 80, "desc": "Thick creamy cold coffee with chocolate drizzle." },
        { "id": 57, "name": "Cold Coffe with Icecream", "category": "Cold Coffe", "price": 100, "desc": "Cold coffee topped with a huge vanilla scoop." },
        { "id": 58, "name": "Hot Coffe", "category": "Cold Coffe", "price": 50, "desc": "Classic hot brewed coffee." },
        { "id": 59, "name": "Butter Scotch", "category": "Icecream", "price": 35, "desc": "Classic butter scotch scoop." },
        { "id": 60, "name": "Vanilla Ice Cream", "category": "Icecream", "price": 30, "desc": "Creamy vanilla." },
        { "id": 61, "name": "Kiki & Oreo Icecream", "category": "Icecream", "price": 40, "desc": "Oreo chunks in cream." },
        { "id": 62, "name": "Choclate Icecream", "category": "Icecream", "price": 35, "desc": "Rich chocolate scoop." },
        { "id": 63, "name": "Kitkat Mixed Shake", "category": "Thick Shakes", "price": 100, "desc": "Thick milk shake loaded with KitKat." },
        { "id": 64, "name": "Oreo & Kiki Shake", "category": "Thick Shakes", "price": 110, "desc": "Crunchy Oreo and Kiki." },
        { "id": 65, "name": "Strawberry Milk Shake (Seasonal)", "category": "Thick Shakes", "price": 100, "desc": "Sweet strawberry thick shake." },
        { "id": 66, "name": "Dark Fantasy Milk Shake", "category": "Thick Shakes", "price": 120, "desc": "Blended Dark Fantasy cookies." },
        { "id": 67, "name": "Dry Fruit Milk Shake", "category": "Thick Shakes", "price": 120, "desc": "Healthy loaded dry fruit shake." },
        { "id": 68, "name": "Vanilla Oreo Jar", "category": "Cake Jars", "price": 90, "desc": "Layered oreo and vanilla cake." },
        { "id": 69, "name": "Black Forest Jar", "category": "Cake Jars", "price": 90, "desc": "Classic black forest in a jar." },
        { "id": 70, "name": "Lotus Biscoff Jar", "category": "Cake Jars", "price": 100, "desc": "Premium Biscoff layered jar." },
        { "id": 71, "name": "Double Choclate Jar", "category": "Cake Jars", "price": 90, "desc": "Overloaded chocolate cake jar." },
        { "id": 72, "name": "Berry Smoothie", "category": "Smooties", "price": 90, "desc": "Fresh mixed berry blend." },
        { "id": 73, "name": "Choclate Banana", "category": "Smooties", "price": 80, "desc": "Classic choco-banana." },
        { "id": 74, "name": "Strawberry Smoothie", "category": "Smooties", "price": 100, "desc": "Seasonal strawberry smoothie." },
        { "id": 75, "name": "Sandwitch + Cold Coffe + French Fries", "category": "Combo", "price": 200, "desc": "The perfect munch combo." },
        { "id": 76, "name": "Pocket Waffle + Cold Coffe + French Fries", "category": "Combo", "price": 170, "desc": "Sweet, salty and refreshing combo." }
    ];

    // State
    let menuData = [];
    let cart = [];

    // Bootstrap Component Instances
    const cartOffcanvas = new bootstrap.Offcanvas('#cartOffcanvas');
    const orderModal = new bootstrap.Modal('#orderModal');

    // Initialize - Load Menu via AJAX
    function init() {
        $.ajax({
            url: 'menu.json',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                menuData = data;
                renderMenu("all");
                console.log("Menu loaded successfully via AJAX.");
            },
            error: function (err) {
                console.warn("AJAX failed (likely CORS on file://). Using local fallback data.");
                menuData = localMenuData;
                renderMenu("all");
            }
        });

        setupEventListeners();
    }

    // EXPOSE FUNCTIONS GLOBALLY (Reliable for browsers)
    window.addToCart = function (id) {
        // Ensure menuData is loaded
        const currentData = menuData.length > 0 ? menuData : localMenuData;
        const item = currentData.find(i => i.id === parseInt(id));

        if (!item) return;

        const existing = cart.find(c => c.id === parseInt(id));
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...item, qty: 1 });
        }

        // Animation
        $('#cart-icon').css('transform', 'scale(1.3)');
        setTimeout(() => $('#cart-icon').css('transform', 'scale(1)'), 200);

        updateCartUI();
    };

    window.changeQty = function (id, delta) {
        const item = cart.find(c => c.id === parseInt(id));
        if (item) {
            item.qty += delta;
            if (item.qty <= 0) {
                cart = cart.filter(c => c.id !== parseInt(id));
            }
        }
        updateCartUI();
    };

    window.removeItem = function (id) {
        cart = cart.filter(c => c.id !== parseInt(id));
        updateCartUI();
    };

    // Render Menu Items
    function renderMenu(category) {
        const $menuGrid = $('#menu-grid');
        $menuGrid.empty();

        const currentData = menuData.length > 0 ? menuData : localMenuData;
        const filteredMenu = category === 'all'
            ? currentData
            : currentData.filter(item => item.category === category);

        filteredMenu.forEach(item => {
            const boxHtml = `
                <div class="col">
                    <div class="menu-item-box">
                        <div class="menu-item-info">
                            <h3 class="menu-item-name">${item.name}</h3>
                            <p class="menu-item-desc">${item.desc}</p>
                        </div>
                        <div class="menu-item-action">
                            <span class="menu-item-price">₹${item.price}</span>
                            <button class="add-btn-new" onclick="window.addToCart(${item.id})">
                                <i class='bx bx-plus'></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            `;
            $menuGrid.append(boxHtml);
        });
    }

    // Setup Event Listeners
    function setupEventListeners() {
        // Tab switching
        $(document).on('click', '.tab-btn, .btn-outline-primary[data-category]', function () {
            $('.tab-btn, .btn-outline-primary[data-category]').removeClass('active');
            $(this).addClass('active');
            renderMenu($(this).data('category'));
        });

        // Cart Toggle
        $('#cart-icon').on('click', function () {
            cartOffcanvas.show();
        });

        // Checkout
        $('#checkout-btn').on('click', handleCheckout);

        // Close Modal Reset
        $('#close-modal-btn').on('click', function () {
            orderModal.hide();
            cart = [];
            updateCartUI();
        });
    }

    function updateCartUI() {
        const $cartItems = $('#cart-items');
        $cartItems.empty();
        let totalItems = 0;
        let totalPrice = 0;

        cart.forEach(item => {
            totalItems += item.qty;
            totalPrice += (item.qty * item.price);

            const itemHtml = `
                <div class="cart-item d-flex align-items-center gap-3 p-3 mb-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-lg">
                    <div class="item-info flex-grow-1">
                        <h4 class="fs-6 fw-bold mb-1 text-white">${item.name}</h4>
                        <div class="item-price text-primary fw-bold">₹${item.price}</div>
                    </div>
                    <div class="item-controls d-flex align-items-center gap-2">
                        <button class="btn btn-sm btn-dark border-secondary p-1" onclick="changeQty(${item.id}, -1)">-</button>
                        <span class="fw-bold px-1">${item.qty}</span>
                        <button class="btn btn-sm btn-dark border-secondary p-1" onclick="changeQty(${item.id}, 1)">+</button>
                        <button class="btn btn-sm text-danger ms-2 p-1" onclick="removeItem(${item.id})"><i class='bx bx-trash'></i></button>
                    </div>
                </div>
            `;
            $cartItems.append(itemHtml);
        });

        $('#cart-count').text(totalItems);
        $('#cart-total-price').text(`₹${totalPrice}`);
    }

    // Checkout Logic
    function handleCheckout() {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        cartOffcanvas.hide();

        // Generate Receipt
        const $receipt = $('#receipt');
        $receipt.empty();
        let total = 0;
        const orderItems = [];

        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            orderItems.push({ name: item.name, qty: item.qty, price: item.price, total: itemTotal });

            $receipt.append(`
                <div class="d-flex justify-content-between mb-2">
                    <span class="text-sm">${item.qty}x ${item.name}</span>
                    <span class="text-sm fw-bold text-white">₹${itemTotal}</span>
                </div>
            `);
        });

        $receipt.append(`
            <div class="border-top border-secondary mt-3 pt-3 d-flex justify-content-between">
                <span class="fw-bold text-primary fs-5">Total Paid</span>
                <span class="fw-bold text-primary fs-5">₹${total}</span>
            </div>
        `);

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

        orderModal.show();
    }

    // Run Init
    init();
});
