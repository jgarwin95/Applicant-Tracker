import ThemeProvider from "@mui/material/styles/ThemeProvider";
import "./App.css";
import MyRoutes from "./Routes";
import { theme } from "./themes/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MyRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
