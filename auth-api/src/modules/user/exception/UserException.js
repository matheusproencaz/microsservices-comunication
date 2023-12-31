import BaseHttpError from '../../../middlewares/Exceptions/BaseHttpError';

export default class UserException extends BaseHttpError {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}