import Container from "@mui/material/Container";
import React from "react";

type ListingPageProps = {
  header?: JSX.Element;
  fullWidth?: boolean;
};

const ListingPage: React.FC<ListingPageProps> = ({
  header,
  fullWidth = false,
  children,
}) => {
  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      sx={{ width: "100%", height: "100%" }}
    >
      {header && React.cloneElement(header, { fullWidth })}
      <Container maxWidth={fullWidth ? "xl" : "md"} disableGutters={true}>
        {children}
      </Container>
    </Container>
  );
};

export default ListingPage;
