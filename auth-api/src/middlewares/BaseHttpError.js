export default class BaseHttpError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}