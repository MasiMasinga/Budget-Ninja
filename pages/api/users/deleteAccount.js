import authMiddleware from "@/middleware/authMiddleware";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deleteAccount = async (req, res) => {

    if (req.method !== 'DELETE') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    let data = {
        id: req.params.id,
        email: req.body.email,
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

        if (data.email !== user.email) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }

        const deletedUser = await prisma.user.delete({
            where: {
                id: data.id
            }
        });

        return res.status(200).json({ msg: 'Account deleted', user: deletedUser });
    } catch (err) {
        return res.status(500).json({ msg: 'Server Error' });
    }

}

export default authMiddleware(deleteAccount);