import React from "react";

// Mui
import Grid from "@mui/material/Grid";

// Components
import Typography from "@/common/components/Typography";

// Utils
import { Colors } from "@/common/utils/constants";

const ExpenseViewRowHeadings = () => {
  return (
    <Grid container spacing={0.25} sx={{ flexWrap: "nowrap" }}>
      <Grid item xs={0.5} sx={{ minWidth: "70px" }}>
        <Typography variant="paragraph" bold color={Colors.black}>
          Name
        </Typography>
      </Grid>
      <Grid item xs={2.5} sx={{ minWidth: "175px" }}>
        <Typography variant="paragraph" bold color={Colors.black}>
          Amount
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ minWidth: "120px" }}>
        <Typography variant="paragraph" bold color={Colors.black}>
          Date
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ExpenseViewRowHeadings;
