import React from "react";
import { Container, Card, Icon } from "semantic-ui-react";

const Page = (props) => {
  return (
    <Container fluid style={{ padding: "12px 36px" }}>
      <Card.Group>
        <Card fluid>
          <Card.Content header="About Amy" />
          <Card.Content>"lorem ipsum"</Card.Content>
          <Card.Content extra>
            <Icon name="user" />4 Friends
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
};

export default Page;
