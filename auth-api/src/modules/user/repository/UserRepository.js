import User from "../model/User";

class UserRepository {
    async findByEmail(email) {
        try {
            return await User.findOne({ where: { email } });
        } catch(err) {
            console.error(err);
            return null;
        }
    }

    async findById(id) {
        try {
            return await User.findOne({ where: { id } });
        } catch(err) {
            console.error(err);
            return null;
        }
    }
}

export default new UserRepository();