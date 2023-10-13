import BaseHttpError from "./BaseHttpError";

const ExceptionHandler = (err, req, res, next) => {
    // console.info("Middleware Error Handling");
    let errStatus = err.statusCode || 500;

    if (err instanceof BaseHttpError) {
        errStatus = 400;
    }

    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: err.message || 'Something went wrong!'
    });
    next();
}

export default ExceptionHandler;