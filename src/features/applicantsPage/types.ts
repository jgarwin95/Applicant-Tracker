export type SessionsResponse = {
  sessions: Session[];
};

export type Session = {
  title: string;
  dateCreated: Date;
  applicants: Applicant[];
  interviewers: Interviewer[];
};

export type Applicant = {};

export type Interviewer = {};
