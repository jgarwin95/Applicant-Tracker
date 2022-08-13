import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React from "react";
import { Session } from "./types";
import "./ApplicantCard.css";
import { IconButton, InputBase } from "@mui/material";

interface Props {
  session: Session;
}
const SearchPanel: React.FC<Props> = ({ session }) => {
  return (
    <Grid item sx={{ width: "100%" }}>
      <Paper
        sx={{
          height: 140,
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            {/* <SearchIcon /> */}
          </IconButton>
        </Paper>
      </Paper>
    </Grid>
  );
};

export default SearchPanel;
