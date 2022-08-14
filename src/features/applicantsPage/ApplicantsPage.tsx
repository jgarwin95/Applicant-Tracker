import ApplicantListContainer from "../applicantsList/ApplicantListContainer";
import ListingPage from "../../sharedComponents/ListingPage";
import PageHeader from "../../sharedComponents/PageHeader";

const ApplicantsPage = () => {
  return (
    <ListingPage header={<PageHeader headerText="Applicants" />}>
      <ApplicantListContainer />
    </ListingPage>
  );
};

export default ApplicantsPage;
