import authMiddleware from "@/middleware/authMiddleware";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getBudget = async (req, res) => {

    if (req.method !== 'GET') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    let data = {
        id: req.params.id,
    }

    if (!data.id) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {

        const budget = await prisma.budget.findUnique({
            where: {
                id: data.id,
            },
        });

        if (!budget) {
            return res.status(400).json({ msg: 'Budget does not exist' });
        }

        return res.status(200).json({ msg: 'Budget fetched', budget: budget });
    } catch (err) {
        return res.status(500).json({ msg: 'Server Error' });
    }

}

const updateBudget = async (req, res) => {

    if (req.method !== 'PUT') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    let data = {
        id: req.params.id,
        budget_name: req.body.budget_name,
        budget_amount: req.body.budget_amount,
    }

    if (!data.id || !data.budget_name || !data.budget_amount) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {

        const updatedBudget = await prisma.budget.update({
            where: {
                id: data.id,
            },
            data: {
                budget_name: data.budget_name,
                budget_amount: data.budget_amount,
            },
        });

        return res.status(200).json({ msg: 'Budget updated', budget: updatedBudget });
    } catch (err) {
        return res.status(500).json({ msg: 'Server Error' });
    }

}

const deleteBudget = async (req, res) => {

    if (req.method !== 'DELETE') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    let data = {
        id: req.params.id,
    }

    if (!data.id) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {

        const deletedBudget = await prisma.budget.delete({
            where: {
                id: data.id,
            },
        });

        return res.status(200).json({ msg: 'Budget deleted', budget: deletedBudget });
    } catch (err) {
        return res.status(500).json({ msg: 'Server Error' });
    }

}

export default authMiddleware(getBudget, updateBudget, deleteBudget);