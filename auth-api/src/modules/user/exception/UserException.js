import BaseHttpError from '../../../middlewares/BaseHttpError';

export default class UserException extends BaseHttpError {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = this.constructor.name;
        Error.captureStackTrace(this.constructor);
    }
}