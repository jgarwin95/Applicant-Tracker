import List from "@mui/material/List";
import ApplicantListItem from "./ApplicantListItem";
import { Applicant } from "./types";

type ApplicantListProps = {
  applicants: Applicant[];
};

const ApplicantList = ({ applicants }: ApplicantListProps) => {
  return (
    <List dense sx={{ width: "100%", bgcolor: "white" }}>
      {applicants.map((applicant, key) => {
        return <ApplicantListItem key={key} applicant={applicant} />;
      })}
    </List>
  );
};

export default ApplicantList;
