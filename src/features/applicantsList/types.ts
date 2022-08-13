export type Applicant = {
  name: string;
  email: string;
  yearInSchool: "FRESHMAN" | "SOPHMORE" | "JUNIOR" | "SENIOR";
  yearsApplied: number[];
  yearsAccepted: number[];
  programsAttended: string[];
};
