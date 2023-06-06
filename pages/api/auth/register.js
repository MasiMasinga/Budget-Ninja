import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const register = async (req, res) => {

    if (req.method !== 'POST') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    const { first_name, email, password, confirm_password } = req.body;

    if (!first_name || !email || !password || !confirm_password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    if (password.length < 6) {
        return res.status(400).json({ msg: 'Password must be at least 6 characters' });
    }

    if (password !== confirm_password) {
        return res.status(400).json({ msg: 'Passwords do not match' });
    }

    try {
        let user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = await prisma.user.create({
            data: {
                name: first_name,
                email: email,
                password: hash,
            },
        });

        return res.status(200).json({ msg: 'User created', user: newUser });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Server Error' });
    }
}

export default register;
