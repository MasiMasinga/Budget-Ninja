import React from "react";

// Mui
import Stack from "@mui/material/Stack";

// Mui Icons
import MoneyIcon from "@mui/icons-material/Money";

// Components
import Typography from "@/common/components/Typography";
import Button from "@/common/components/Button";
import { LinearProgressBar } from "@/common/components/LinearProgressBar";

// Utils
import { Colors } from "@/common/utils/constants";

const ViewBudgetCard = () => {
  return (
    <Stack alignItems="center">
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          px: 5,
          border: "2px solid black",
          bgcolor: Colors.white,
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subheader" mt mb bold>
            Groceries
          </Typography>
          <Typography variant="subheader" mt mb>
            R200.00 Budgeted
          </Typography>
        </Stack>
        <Stack>
          <LinearProgressBar variant="determinate" value={50} />
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="paragraph" mt mb>
            R0.00 spent
          </Typography>
          <Typography variant="paragraph" mt mb>
            R222.00 remaining
          </Typography>
        </Stack>
        <Stack sx={{ px: 10, py: 2 }}>
          <Button href="/budget/1" endIcon={<MoneyIcon />}>
            View Details
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ViewBudgetCard;
