import { Container } from "@mui/material";

const PageHeader = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      sx={{ minHeight: "125px", borderBottom: 1, borderColor: "#b0b0b0" }}
    >
      <h1>Hello!</h1>
    </Container>
  );
};

export default PageHeader;
