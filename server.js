const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const PORT = 3000;
// Middleware
app.use(cors());
app.use(express.json());
// Serve static frontend files (HTML, CSS, JS) from the same directory
app.use(express.static(path.join(__dirname)));
// Connect to SQLite Database
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) console.error("Database connection error:", err.message);
    else console.log("Connected to the SQLite database.");
});
// Create the Orders table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    date TEXT,
    items TEXT,
    total REAL,
    status TEXT
)`);
// --- API ROUTES ---
// 1. Submit a New Order (Called by script.js)
app.post('/api/orders', (req, res) => {
    const { id, date, items, total, status } = req.body;
    
    const itemsJson = JSON.stringify(items);
    
    const query = `INSERT INTO orders (id, date, items, total, status) VALUES (?, ?, ?, ?, ?)`;
    db.run(query, [id, date, itemsJson, total, status], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Order placed successfully!" });
    });
});
// 2. Get All Orders (Called by admin.js)
app.get('/api/orders', (req, res) => {
    db.all(`SELECT * FROM orders`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        
        const orders = rows.map(row => ({
            ...row,
            items: JSON.parse(row.items)
        }));
        res.json(orders);
    });
});
// 3. Mark Order as Completed (Called by admin.js)
app.put('/api/orders/:id/complete', (req, res) => {
    const orderId = req.params.id;
    db.run(`UPDATE orders SET status = 'Completed' WHERE id = ?`, [orderId], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Order marked as completed" });
    });
});
// 4. Delete an Order (Called by admin.js)
app.delete('/api/orders/:id', (req, res) => {
    const orderId = req.params.id;
    db.run(`DELETE FROM orders WHERE id = ?`, [orderId], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Order deleted" });
    });
});
// Start Server
app.listen(PORT, () => {
    console.log(`Backend Server running on http://localhost:${PORT}`);
    console.log(`Store Link: http://localhost:${PORT}/index.html`);
    console.log(`Admin Link: http://localhost:${PORT}/admin.html`);
});
