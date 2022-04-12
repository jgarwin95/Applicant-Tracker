import { Grid } from "@mui/material";
import React from "react";
import ListingPage from "../templates/ListingPage";
import ApplicantCard from "./ApplicantCard";
import { Session } from "./types";

var today = new Date();

const dummyData: Session[] = [
  {
    title: "GFF Interviews 2022",
    dateCreated: today.toLocaleDateString("en-US"),
    applicants: [],
    interviewers: [],
  },
  {
    title: "GFF Interviews 2021",
    dateCreated: today.setFullYear(today.getFullYear() - 1).toString(),
    applicants: [],
    interviewers: [],
  },
  {
    title: "GFF Interviews 2020",
    dateCreated: today.setFullYear(today.getFullYear() - 1).toString(),
    applicants: [],
    interviewers: [],
  },
];

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
        {dummyData.map((session) => (
          <ApplicantCard session={session} />
        ))}
      </Grid>
    </ListingPage>
  );
};

export default ApplicantsPage;
