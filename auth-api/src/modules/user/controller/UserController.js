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

    async getAccessToken(req, res, next) {
        try {
            const accessToken = await UserService.getAccessToken(req);

            res.setHeader('Authorization', accessToken);
            return res.status(200).json();
        } catch(err) {
            next(err)
        }
    }
}

export default new UserController();