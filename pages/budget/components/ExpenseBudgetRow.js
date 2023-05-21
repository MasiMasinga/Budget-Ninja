import React from 'react'

// Mui
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

// Mui Icons
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

// Components
import Typography from "@/common/components/Typography";

// Utils
import { Colors } from '@/common/utils/constants';

const ExpenseBudgetRow = () => {
  return (
    <Grid container spacing={0.25} py={0.15} sx={{ flexWrap: "nowrap" }}>
        <Grid item xs={0.5} sx={{ minWidth: "70px" }}>
          <Typography
            variant={"paragraph"}
            sx={{
              backgroundColor: Colors.greyMed,
              borderRadius: 0.5,
              p: 1.5,
            }}
          >
            Coffee
          </Typography>
        </Grid>
        <Grid item xs={2.5} sx={{ minWidth: "175px" }}>
          <Typography
            variant="paragraph"
            sx={{
              backgroundColor: Colors.greyMed,
              borderRadius: 0.5,
              p: 1.5,
            }}
          >
            R2,200.00	
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{ minWidth: "125px" }}>
          <Typography
            variant="paragraph"
            sx={{
              backgroundColor: Colors.greyMed,
              borderRadius: 0.5,
              p: 1.5,
            }}
          >
            21/05/2023	
          </Typography>
        </Grid>
        <Grid item xs={7} sx={{ minWidth: "305px" }}>
          <Stack
            direction="row"
            sx={{
              backgroundColor: Colors.greyMed,
              borderRadius: 0.5,
            }}
            textAlign="left"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton sx={{ p: 1.35}}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
  )
}

export default ExpenseBudgetRow