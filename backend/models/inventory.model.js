import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
}, {
    timestamps: true,
});

const Inventory = mongoose.model('Inventory', inventorySchema);

export default Inventory;
