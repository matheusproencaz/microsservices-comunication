import * as HttpStatus from '../../../config/Constants/httpStatus';
import UserService from "../service/UserService";

class UserController {
    async findByEmail(req, res, next) {
        try {
            let user = await UserService.findByEmail(req, next);
            return res.status(HttpStatus.SUCCESS).json(user);
        } catch (err) {
            next(err);
        }
    }
}

export default new UserController();