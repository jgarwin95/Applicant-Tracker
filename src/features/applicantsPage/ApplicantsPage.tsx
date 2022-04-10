import { Grid, Paper } from "@mui/material";
import React from "react";
import ListingPage from "../templates/ListingPage";

interface Props {}

const ApplicantsPage: React.FC<Props> = () => {
  return (
    <ListingPage>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        {[0, 1, 2].map((value) => (
          <Grid key={value} item>
            <Paper
              sx={{
                height: 140,
                width: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </ListingPage>
  );
};

export default ApplicantsPage;
