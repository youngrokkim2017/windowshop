const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const prodcuts = await Product.find({});
    
        res.json(products);
    } catch (err) {
        console.error(error)
        res.status(500).json({message: 'Server error'});
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(res.params.id);
    
        res.json(product);
    } catch (err) {
        console.error(error)
        res.status(500).json({message: 'Server error'});
    }
}

module.exports = {
    getAllProducts,
    getProductById,
}