import express from 'express';
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/inventory.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/create',verifyToken, createProduct);
router.get('/',verifyToken, getAllProducts);
router.get('/product/:id',verifyToken, getProductById);
router.patch('/updateProduct/:id',verifyToken, updateProduct);
router.delete('/deleteProduct/:id',verifyToken, deleteProduct);

export default router;
