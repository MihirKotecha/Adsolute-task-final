import Inventory from '../models/inventory.model.js';
import redisClient from '../lib/redisClient.js';

export const createProduct = async (req, res) => {
    try {
        const { productName, description, quantity } = req.body;
        const newProduct = new Inventory({ productName, description, quantity });
        const savedProduct = await newProduct.save();
        redisClient.del('products_all');
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const { search } = req.query;
        if (!search) {

    
            try {
                const cachedProducts = await redisClient.get('products_all');

        
                if (cachedProducts) {
                    console.log('Returning cached products:', JSON.parse(cachedProducts));
                    return res.status(200).json(JSON.parse(cachedProducts));
                }
        

                const products = await Inventory.find({});
                await redisClient.set('products_all', JSON.stringify(products), {
                    EX: 3600
                });

                return res.status(200).json(products);
            } catch (err) {
                console.error('Error during Redis operation:', err);
                return res.status(500).json({ message: 'Error checking Redis cache', error: err });
            }
        
        } else {

            const filter = {
                $or: [
                    { productName: { $regex: search, $options: 'i' } },
                    { description: { $regex: search, $options: 'i' } }
                ]
            };

            const products = await Inventory.find(filter);

            res.status(200).json(products);
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products', error });
    }
};


export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Inventory.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Inventory.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        redisClient.del('products_all');
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error });
    }
};


export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Inventory.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        redisClient.del('products_all');
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};
