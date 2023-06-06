import React, { useContext } from "react";
import { useRouter } from 'next/router';

// Mui
import Stack from "@mui/material/Stack";

// Context
import { BudgetContext } from "@/pages/budget/contexts/BudgetContext";

// Mui Icons
import MoneyIcon from "@mui/icons-material/Money";

// Components
import Typography from "@/common/components/Typography";
import Button from "@/common/components/Button";
import { LinearProgressBar } from "@/common/components/LinearProgressBar";

// Utils
import { Colors } from "@/common/utils/constants";

const ViewBudgetCard = ({
  budget: {
    budget_name,
    budget_amount,
  }
}) => {
  const router = useRouter();
  const { id } = router.query;
  const { remainingBudget, spentBudget } = useContext(BudgetContext);

  return (
    <Stack alignItems="center">
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          px: 5,
          border: `2px solid ${Colors.black}`,
          bgcolor: Colors.white,
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subheader" mt mb bold>
            {budget_name}
          </Typography>
          <Typography variant="subheader" mt mb>
            R{budget_amount} Budgeted
          </Typography>
        </Stack>
        <Stack>
          <LinearProgressBar variant="determinate" value={spentBudget} />
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="paragraph" mt mb>
            R{spentBudget}
          </Typography>
          <Typography variant="paragraph" mt mb>
            R{remainingBudget} remaining
          </Typography>
        </Stack>
        <Stack sx={{ px: 10, py: 2 }}>
          <Button onClick={() => router.push(`/budget/${id}`)} endIcon={<MoneyIcon />}>
            View Details
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ViewBudgetCard;
