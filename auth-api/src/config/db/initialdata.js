import bcrypt from 'bcrypt';
import User from '../../modules/user/model/User';

export async function createInitialData() {
    try {
        await User.sync({ force: true });

        let password = await bcrypt.hash("123456", 10);
    
        let firtUser = await User.create({
            name: "User Test1",
            email: "test_user1@gmail.com",
            password: password
        })
        
        let secondUser = await User.create({
            name: "User Test2",
            email: "test_user2@gmail.com",
            password: password
        })

    } catch(err) {
        console.error(err)
    }
}