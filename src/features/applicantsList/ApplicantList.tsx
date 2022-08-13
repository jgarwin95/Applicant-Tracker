import ApplicantListItem from "./ApplicantListItem";
import { Applicant } from "./types";

type ApplicantListProps = {
  applicants: Applicant[];
};

const ApplicantList = ({ applicants }: ApplicantListProps) => {
  return (
    <>
      {applicants.map((applicant, key) => {
        return <ApplicantListItem key={key} applicant={applicant} />;
      })}
    </>
  );
};

export default ApplicantList;
