import BaseHttpError from "./Exceptions/BaseHttpError";

const ExceptionHandler = (err, req, res, next) => {
    let errStatus = err.statusCode || 500;

    if (!err.statusCode && err instanceof BaseHttpError) {
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