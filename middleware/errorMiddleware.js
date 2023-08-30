const errorMiddleware = (err, req, res, next) => {
    console.log('error middleware');
    const statusCode = err.statusCode || 500; // Use err.statusCode if it's defined, otherwise default to 500
    res.status(statusCode);
    res.json({ message: err.message, stack: process.env.NODE_ENV === 'development' ? err.stack : null });
};

module.exports = errorMiddleware;
