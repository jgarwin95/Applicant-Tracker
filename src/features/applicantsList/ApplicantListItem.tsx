import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "./ApplicantCard.css";
import { Applicant } from "./types";

type ApplicantListItemProps = {
  applicant: Applicant;
};

const ApplicantListItem = ({ applicant }: ApplicantListItemProps) => {
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
            <div>{applicant.name}</div>
            <div>{applicant.email}</div>
          </div>
          <div id="button-holder">
            <Button variant="contained" size="medium">
              View profile
            </Button>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default ApplicantListItem;
