import React from "react";
import { Menu, Button, Input, Container, Image } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu inverted>
      <Container fluid style={{ padding: "0px 38px" }}>
        <Menu.Item header>
          <Image size="small" src="logo.png" />
        </Menu.Item>
        <Menu.Item position="right">
          <Input
            action={{ type: "submit", content: "Go" }}
            placeholder="Navigate to..."
          />
        </Menu.Item>
        <Menu.Item name="aboutUs" />
        <Menu.Item name="jobs" />
        <Menu.Item name="locations" />

        <Menu.Item>
          <Button primary>Sign up</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Log-in</Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
