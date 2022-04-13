import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React from "react";
import { Session } from "./types";

interface Props {
  session: Session;
}
const ApplicantCard: React.FC<Props> = ({ session }) => {
  return (
    <Grid item>
      <Paper
        sx={{
          height: 140,
          width: 1,
        }}
      >
        <Box
          sx={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box>{session.title}</Box>
            <Box>{session.dateCreated}</Box>
          </Box>
          <Box>
            <Button variant="contained" size="medium">
              Join Session
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ApplicantCard;
