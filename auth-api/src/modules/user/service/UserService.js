import UserRepository from "../repository/UserRepository";
import UserException from "../exception/UserException";
import * as HttpStatus from "../../../config/Constants/httpStatus";

class UserService {
    async findByEmail(req) {
        const { email } = req.params;
        this.validateRequestData(email);
        let user = await UserRepository.findByEmail(email);
        this.validateUserNotFound(user);
        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        }
    }

    validateRequestData(email) {
        if (!email) {
            throw new UserException(
                'User email was not informed.'
            );
        }
    }

    validateUserNotFound(user) {
        if (!user) {
            throw new UserException(
                "User not found!"
            );
        }
    }
}

export default new UserService();