import { Container } from "@mui/material";

type PageHeaderProps = {
  fullWidth?: boolean;
};

const PageHeader = ({ fullWidth = false }: PageHeaderProps) => {
  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      sx={{ minHeight: "125px", borderBottom: 1, borderColor: "#b0b0b0" }}
    >
      <Container maxWidth={fullWidth ? "xl" : "md"} disableGutters={true}>
        <h1>Hello!</h1>
      </Container>
    </Container>
  );
};

export default PageHeader;
