import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled("p")`
  font-size: 20px;
`;

function NavBar() {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <NavLink to="/">
            <Tabs>Code for interview</Tabs>
          </NavLink>
          <NavLink to="/all">
            <Tabs>All users</Tabs>
          </NavLink>
          <NavLink to="/add">
            <Tabs>Add User</Tabs>
          </NavLink>
        </Toolbar>
      </Header>
      <div>Welcom to navbar</div>
    </>
  );
}

export default NavBar;
