import authMiddleware from "@/middleware/authMiddleware";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createBudget = async (req, res) => {

    if (req.method !== 'POST') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    const { budget_name, budget_amount } = req.body;

    if (!budget_name || !budget_amount) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const newBudget = await prisma.budget.create({
            data: {
                budget_name: budget_name,
                budget_amount: budget_amount,
            },
        });

        return res.status(200).json({ msg: 'Budget created', budget: newBudget });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Server Error' });
    }
}

const getBudgets = async (req, res) => {

    if (req.method !== 'GET') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    try {
        const budgets = await prisma.budget.findMany();

        return res.status(200).json({ msg: 'Budgets fetched', budgets: budgets });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Server Error' });
    }
}



export default authMiddleware(createBudget, getBudgets);