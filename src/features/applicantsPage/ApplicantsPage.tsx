import ApplicantListContainer from "../applicantsList/ApplicantListContainer";
import ListingPage from "../../sharedComponents/ListingPage";
import PageHeader from "../../sharedComponents/PageHeader";
import Button from "@mui/material/Button";

const ApplicantsPage = () => {
  return (
    <ListingPage
      header={
        <PageHeader
          headerText="Applicants"
          actionItem={
            <Button variant="contained" color="secondary">
              Add applicant
            </Button>
          }
        />
      }
    >
      <ApplicantListContainer />
    </ListingPage>
  );
};

export default ApplicantsPage;
