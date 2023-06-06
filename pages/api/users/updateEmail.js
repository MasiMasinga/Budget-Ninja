import authMiddleware from "@/middleware/authMiddleware";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updateEmail = async (req, res) => {

    if (req.method !== 'PUT') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    let data = {
        id: req.params.id,
        current_email: req.body.current_email,
        new_email: req.body.new_email,
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

        if (data.current_email !== user.email) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: data.id
            },
            data: {
                email: data.new_email
            }
        });

        return res.status(200).json({ msg: 'Email updated', user: updatedUser });
    } catch (err) {
        return res.status(500).json({ msg: 'Server Error' });
    }

}

export default authMiddleware(updateEmail);