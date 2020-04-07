import React from "react";
import { Menu, Input, Label } from "semantic-ui-react";

const Sidebar = () => {
  return (
    <Menu secondary vertical fluid style={{ padding: "12px 0 0 36px" }}>
      <Menu.Item name="inbox" active>
        <Label color="teal">1</Label>
        Inbox
      </Menu.Item>

      <Menu.Item name="spam">
        <Label>51</Label>
        Spam
      </Menu.Item>

      <Menu.Item name="updates">
        <Label>1</Label>
        Updates
      </Menu.Item>
      <Menu.Item>
        <Input icon="search" placeholder="Search mail..." />
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
