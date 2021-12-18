const Product = require('../models/product');

// Create new product => /api/v1/product/new
exports.newProduct = async (req, res, next) => {
	const product = await Product.create(req.body);
	res.status(201).json({
		success: true,
		product,
	});
};

// Get products list => /api/v1/products
exports.getProducts = (req, res, next) => {
	console.log('Ek request ayaa!');
	res.status(200).json({
		success: true,
		message: 'This route will show all products in the database',
	});
};
