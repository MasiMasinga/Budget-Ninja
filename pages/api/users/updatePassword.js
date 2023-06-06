import authMiddleware from "@/middleware/authMiddleware";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updatePassword = async (req, res) => {

    if (req.method !== 'PUT') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    let data = {
        id: req.params.id,
        current_password: req.body.current_password,
        new_password: req.body.new_password,
    }

    if (!data.current_password || !data.new_password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: data.id
            }
        });

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const isMatch = await bcrypt.compare(oldPassword, user.password);

        if (!isMatch) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        const updatedUser = await prisma.user.update({
            where: {
                id: req.userId
            },
            data: {
                password: hashedPassword
            }
        });

        return res.status(200).json({ msg: 'Password updated', user: updatedUser });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Server Error' });
    }
}

export default authMiddleware(updatePassword);