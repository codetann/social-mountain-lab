import React, { useState } from "react";
import styled from "styled-components";
import { BsPerson } from "react-icons/bs";

import theme from "../../styles/theme";

const { blue } = theme.colors;

export default function Status({ post }) {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (!value) return;
    post(value);
    setValue("");
  };

  return (
    <Container>
      <Inputs>
        <BsPerson style={{ ...Icons.person }} />
        <Input
          type="text"
          placeholder="What's on your mind?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Inputs>
      <ButtonContainer>
        <Button onClick={handleClick}>Compose</Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 8rem;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
`;

// - inputs
const Inputs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
const Input = styled.input`
  background: none;
  border: 1px solid ${blue};
  outline: none;
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  margin-left: 1rem;
  border-radius: 0.3rem;

  &::placeholder {
    color: "#686763";
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;

  background: ${blue};
  color: white;
  justify-self: flex-end;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

// - icons
const Icons = {
  person: {
    padding: ".4rem",
    border: `1px solid ${blue}`,
    borderRadius: "50%",
    height: "2rem",
    width: "2rem",
  },
};
