import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React from "react";
import { Session } from "./types";
import "./ApplicantCard.css";

interface Props {
  session: Session;
}
const ApplicantCard: React.FC<Props> = ({ session }) => {
  return (
    <Grid item sx={{ width: "100%" }}>
      <Paper
        sx={{
          height: 140,
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <div id="applicant-card">
          <div id="title-date-holder">
            <div>{session.title}</div>
            <div>{session.dateCreated}</div>
          </div>
          <div id="button-holder">
            <Button variant="contained" size="medium">
              Join Session
            </Button>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default ApplicantCard;
