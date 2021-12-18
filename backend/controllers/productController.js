exports.getProducts = (req, res, next) => {
	console.log('Ek request ayaa!');
	res.status(200).json({
		success: true,
		message: 'This route will show all products in the database',
	});
};
