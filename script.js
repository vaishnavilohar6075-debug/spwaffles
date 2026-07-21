    /**
     * Process Checkout & Send to Node.js Backend Database
     */
    $('#checkout-btn').click(async function () {
        if (cart.length === 0) {
            alert("Please add items to your cart first!");
            return;
        }

        const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
        
        // Create Order Object
        const newOrder = {
            id: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
            date: new Date().toLocaleString(),
            items: cart,
            total: totalPrice,
            status: 'Pending'
        };

        try {
            // SEND ORDER TO BACKEND DATABASE
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newOrder)
            });

            if (!response.ok) throw new Error("Failed to place order in database.");

            // Generate Receipt UI
            const $receipt = $('#receipt');
            $receipt.empty();
            $receipt.append(`<p class="small text-muted mb-2 text-center">Order ID: <strong>${newOrder.id}</strong></p>`);
            
            cart.forEach(item => {
                $receipt.append(`
                    <div class="d-flex justify-content-between small mb-1 border-bottom border-secondary pb-1">
                        <span>${item.qty}x ${item.name}</span>
                        <span>₹${item.price * item.qty}</span>
                    </div>
                `);
            });
            
            $receipt.append(`
                <div class="d-flex justify-content-between mt-3 fw-bold fs-5 text-primary">
                    <span>Total Paid:</span>
                    <span>₹${totalPrice}</span>
                </div>
            `);

            // Close cart and clear
            bsOffcanvas.hide();
            cart = [];
            updateCartUI();

            // Show Confirmation Modal
            bsModal.show();
            
        } catch (error) {
            console.error("Error:", error);
            alert("Sorry, there was a server error processing your order.");
        }
    });
