import bcrypt from 'bcrypt';
import User from '../../modules/user/model/User';

export async function createInitialData() {
    try {
        await User.sync({ force: true });

        let password = await bcrypt.hash("123456", 10);
    
        let firtUser = await User.create({
            name: "User Test",
            email: "test_user@gmail.com",
            password: password
        })
    } catch(err) {
        console.error(err)
    }
}