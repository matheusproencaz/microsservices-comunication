import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserRepository from "../repository/UserRepository";
import UserException from "../exception/UserException";
import * as HttpStatus from "../../../config/Constants/httpStatus";
import * as secret from "../../../config/Constants/secrets";

class UserService {
    async findByEmail(req) {
        const { email } = req.params;
        const { AuthUser } = req;
        this.validateRequestData(email);
        let user = await UserRepository.findByEmail(email);
        this.validateUserNotFound(user);
        this.validateAuthenticatedUser(user, AuthUser);
        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        }
    }

    async getAccessToken(req) {
        const { email, password } = req.body;
        this.validateAcessTokenData(email, password);
        let user = await UserRepository.findByEmail(email);
        this.validateUserNotFound(user);
        await this.validatePassword(password, user.password);
        const authUser = { id: user.id, name: user.name, email: user.email };
        return jwt.sign({authUser}, secret.API_SECRET, { expiresIn: '1d'});
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

    validateAcessTokenData(email, password) {
        if (!email || !password) {
            throw new UserException("Email or password must be informed.", HttpStatus.FORBIDDEN);            
        }
    }

    async validatePassword(password, hashpassword) {
        if (!await bcrypt.compare(password, hashpassword)) {
            throw new UserException("Password doesn't match!", HttpStatus.FORBIDDEN);
        }
    }

    validateAuthenticatedUser(user, authUser) {
        if (!authUser || user.id !== authUser.id) {
            throw new UserException("You cannot see this user data.", HttpStatus.FORBIDDEN);
        }
    }
}

export default new UserService();