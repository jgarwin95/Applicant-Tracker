import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ErrorState from "../../sharedComponents/ErrorState";
import ApplicantList from "./ApplicantList";
import {
  getApplicantsList,
  selectApplicantList,
  selectFetchApplicantsError,
  selectFetchApplicantsListStatus,
} from "./applicantsListSlice";

const ApplicantListContainer = () => {
  const dispatch = useAppDispatch();
  const applicantsList = useAppSelector(selectApplicantList);
  const loadingStatus = useAppSelector(selectFetchApplicantsListStatus);
  const error = useAppSelector(selectFetchApplicantsError);

  // perform data fetching on initial mount of container
  useEffect(() => {
    dispatch(getApplicantsList());
  }, [dispatch]);

  if (loadingStatus === "idle") {
    return <></>;
  } else if (loadingStatus === "loading") {
    return <CircularProgress />;
  } else if (loadingStatus === "failed") {
    return <ErrorState message={error || ""} />;
  } else {
    return <ApplicantList applicants={applicantsList} />;
  }
};

export default ApplicantListContainer;
