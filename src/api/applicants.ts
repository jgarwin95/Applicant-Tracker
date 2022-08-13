import axios from "axios";
import { Applicant } from "../features/applicantsList/types";

export type FetchApplicantsResponse = {
  applicants: Applicant[];
};

export type ValidationErrors = {
  errorMessage: string;
  field_errors: Record<string, string>;
};

export const fetchApplicants = () => {
  return axios.get<FetchApplicantsResponse>(
    "https://b66256f3-aa00-4290-8fd3-aea17fe770be.mock.pstmn.io/applicants"
  );
};
