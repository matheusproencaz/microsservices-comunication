import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import * as secret from '../config/Constants/secrets';
import * as HttpStatus from '../config/Constants/httpStatus';

import AuthenticationException from './Exceptions/AuthenticationException';

const EMPTY_SPACE = ' ';

export default async function AuthenticationMiddleware(req, res, next) {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            throw new AuthenticationException('AccessToken was not Informed!', HttpStatus.UNAUTHORIZED);
        }
    
        let accessToken = authorization;
    
        if(accessToken.includes(EMPTY_SPACE)) {
            accessToken = accessToken.split(EMPTY_SPACE)[1];
        } else {
            accessToken = authorization;
        }

        const decoded = await promisify(jwt.verify)(
            accessToken, 
            secret.API_SECRET
        );
        req.AuthUser = decoded.authUser;
        return next();
    } catch (err) {
        next(err)
    }
}