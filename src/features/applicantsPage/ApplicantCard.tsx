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
      />
      {session.title}
      {session.dateCreated.toUTCString()}
    </Grid>
  );
};

export default ApplicantCard;
