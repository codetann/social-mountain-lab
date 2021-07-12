import React from "react";
import styled from "styled-components";
import { FaMountain, FaSearch } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import theme from "../../styles/theme";

const { blue } = theme.colors;

export default function NavBar() {
  return (
    <Container>
      <Nav>
        {/* Logo */}
        <Logo>
          <FaMountain style={{ ...Icons.mountain }} />
          <h3>Social Mountain</h3>
        </Logo>

        {/* Inputs */}
        <Inputs>
          <Search>
            <Input placeholder="Search Your Feed" />
            <FaSearch />
          </Search>
          <BsPerson style={{ ...Icons.person }} />
        </Inputs>
      </Nav>
    </Container>
  );
}
const Container = styled.div`
  background: white;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 1rem;
`;

const Nav = styled.div`
  background: white;
  width: 100%;
  max-width: 800px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

// - logo
const Logo = styled.div`
  display: flex;
  width: 10.5rem;
  align-items: center;
  justify-content: space-between;
`;

// - inputs
const Inputs = styled.div`
  display: flex;
  align-items: center;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  width: 12rem;
  height: 2rem;
  padding: 0 1rem;
  border: 1px solid ${blue};
  border-radius: 5rem;
`;
const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  width: 100%;

  &::placeholder {
    color: "#686763";
  }
`;

// - icons
const Icons = {
  mountain: {
    color: blue,
    fontSize: "24px",
  },
  person: {
    padding: ".2rem",
    border: `1px solid ${blue}`,
    borderRadius: "50%",
    height: "2rem",
    width: "2rem",
    marginLeft: "1rem",
  },
};
