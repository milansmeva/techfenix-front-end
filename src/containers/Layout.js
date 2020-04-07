import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Sidebar from "./Sidebar";
import Page from "./Page";
import Header from "./Header";

const Layout = () => {
  return (
    <Container fluid>
      <Header />
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={13}>
            <Page />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Layout;
