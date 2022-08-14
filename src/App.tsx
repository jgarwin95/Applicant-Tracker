import ThemeProvider from "@mui/material/styles/ThemeProvider";
import "./App.css";
import ApplicantsPage from "./features/applicantsPage/ApplicantsPage";
import { theme } from "./themes/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ApplicantsPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
