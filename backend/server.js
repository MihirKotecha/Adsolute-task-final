// server.js
import express from 'express'; 
import dbConnection from './config/db.js';
import authRoute from "./routes/auth.route.js";
import inventoryRoute from "./routes/inventory.route.js";
const app = express(); 
const PORT = process.env.PORT || 3000; 
dbConnection();
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
 
app.use("/api/auth", authRoute);
app.use("/api/inventory", inventoryRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
