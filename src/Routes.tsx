import { Route, Routes } from "react-router-dom";
import ApplicantsPage from "./features/applicantsPage/ApplicantsPage";
import SignIn from "./features/login/SignIn";
import Layout from "./sharedComponents/Layout";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SignIn />} />
        <Route path="applicants" element={<ApplicantsPage />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
