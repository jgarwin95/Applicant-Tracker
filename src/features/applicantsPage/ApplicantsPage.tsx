import { Grid } from "@mui/material";
import ApplicantListContainer from "../applicantsList/ApplicantListContainer";
import ListingPage from "../templates/ListingPage";

const ApplicantsPage = () => {
  return (
    <ListingPage>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <ApplicantListContainer />
      </Grid>
    </ListingPage>
  );
};

export default ApplicantsPage;
