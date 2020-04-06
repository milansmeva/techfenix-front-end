import React from "react";
import { Container } from "semantic-ui-react";
import Sidebar from "./Sidebar";
import Page from "./Page";
import Header from "./Header";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Page />
      <Sidebar />
    </Container>
  );
};

export default Layout;
