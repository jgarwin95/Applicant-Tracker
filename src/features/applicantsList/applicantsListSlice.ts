import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  fetchApplicants,
  FetchApplicantsResponse,
  ValidationErrors,
} from "../../api/applicants";
import { RootState } from "../../app/store";
import { Applicant } from "../applicantsPage/types";

export const getApplicantsList = createAsyncThunk<
  FetchApplicantsResponse,
  undefined,
  {
    rejectValue: ValidationErrors;
  }
>("applicantList/getApplicantsList", async (_, { rejectWithValue }) => {
  try {
    const response = await fetchApplicants();
    return response.data;
  } catch (err) {
    let error = err as AxiosError<ValidationErrors>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export type ApplicantsListState = {
  applicantsList: Applicant[];
  fetchApplicantsListStatus: "idle" | "loading" | "failed";
  fetchApplicantsError: string | null;
};

const initialState: ApplicantsListState = {
  applicantsList: [],
  fetchApplicantsListStatus: "idle",
  fetchApplicantsError: null,
};

export const applicantListSlice = createSlice({
  name: "applicantList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApplicantsList.pending, (state, action) => {
        if (state.fetchApplicantsListStatus === "idle") {
          state.fetchApplicantsListStatus = "loading";
        }
      })
      .addCase(getApplicantsList.fulfilled, (state, action) => {
        if (state.fetchApplicantsListStatus === "loading") {
          state.fetchApplicantsListStatus = "idle";
          state.applicantsList = action.payload.applicants;
        }
      })
      .addCase(getApplicantsList.rejected, (state, action) => {
        if (state.fetchApplicantsListStatus === "loading") {
          state.fetchApplicantsListStatus = "idle";
          state.fetchApplicantsError = action.payload?.errorMessage || null;
        }
      });
  },
});

export const selectCount = (state: RootState) => state.counter.value;

export default applicantListSlice.reducer;
