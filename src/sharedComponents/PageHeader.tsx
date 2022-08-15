import { Container } from "@mui/material";

type PageHeaderProps = {
  headerText: string;
  actionItem?: JSX.Element;
  fullWidth?: boolean;
};

const PageHeader = ({
  headerText,
  actionItem,
  fullWidth = false,
}: PageHeaderProps) => {
  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      sx={{
        minHeight: "125px",
        borderBottom: 1,
        borderColor: "#b0b0b0",
        marginBottom: "15px",
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
          paddingBottom: "22px",
        }}
      >
        <h1 style={{ marginBottom: 0 }}>{headerText}</h1>
        {actionItem}
      </Container>
    </Container>
  );
};

export default PageHeader;
