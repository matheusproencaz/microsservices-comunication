export default class AuthenticationException extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}