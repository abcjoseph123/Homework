import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  backround-color: rgb(255, 250, 250);
`;
const NavBarUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavBarLi = styled.li`
  margin: 0.5rem;
  padding: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: inline-block;
  margin-left: 2rem;
  background-color: rgb(255, 250, 250);
`;
const NavBarA = styled.a`
  text-decoration: none;

  &:hover {
    color: #fff;
    cursor: context-menu;
  }
`;

export class Header extends React.PureComponent {
  render() {
    return (
      <NavBar>
        <NavBarUl>
          <NavBarLi>
            <NavBarA href={"/addtime"}>add time manually</NavBarA>
          </NavBarLi>

          <NavBarLi>
            <NavBarA href={"/alltimes"}>all entrys</NavBarA>
          </NavBarLi>

          <NavBarLi>
            <NavBarA href={"/stopwatch"}>Stopwatch tracking</NavBarA>
          </NavBarLi>

          <NavBarLi>
            <NavBarA href={"/search"}>Search by description</NavBarA>
          </NavBarLi>
        </NavBarUl>
      </NavBar>
    );
  }
}
