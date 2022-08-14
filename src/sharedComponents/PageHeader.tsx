import { Container } from "@mui/material";

type PageHeaderProps = {
  headerText: string;
  fullWidth?: boolean;
};

const PageHeader = ({ headerText, fullWidth = false }: PageHeaderProps) => {
  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      sx={{
        minHeight: "125px",
        borderBottom: 1,
        borderColor: "#b0b0b0",
      }}
    >
      <Container
        maxWidth={fullWidth ? "xl" : "md"}
        disableGutters={true}
        sx={{
          minHeight: "125px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <h1>{headerText}</h1>
      </Container>
    </Container>
  );
};

export default PageHeader;
