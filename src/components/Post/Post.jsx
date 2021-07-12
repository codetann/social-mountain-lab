import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BsPerson, BsThreeDotsVertical } from "react-icons/bs";
import { FiMessageSquare, FiHeart, FiMail } from "react-icons/fi";
import theme from "../../styles/theme";

const { blue } = theme.colors;

export default function Post({ date, text, id, del, put }) {
  const [toggle, setToggle] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(text);
  const menuRef = useRef(null);

  const handleToggle = (e) => setToggle(!toggle);

  // api request functions
  const handleDelete = () => del(`${id}`);
  const handlePut = () => {
    if (!value) return;
    put(id, value);
    setEdit(false);
  };

  return (
    <Container>
      <Info>
        <div style={{ display: "flex", alignItems: "center" }}>
          <BsPerson style={{ ...Icons.person }} />
          <Name>DevMountain</Name>
          <Username>@DevMountain - {date}</Username>
        </div>
        <div>
          <BsThreeDotsVertical
            style={{ ...Icons.dots }}
            onClick={handleToggle}
          />

          {/* Modal */}
          <Modal toggle={toggle}>
            <button
              onClick={() => {
                setEdit(true);
                setToggle(false);
              }}
            >
              Edit
            </button>
            <button onClick={handleDelete}>Delete</button>
          </Modal>
        </div>
      </Info>

      {/* Text Content and Editor */}
      <Content>
        {edit && (
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
        )}
        {!edit && <p>{text}</p>}
      </Content>

      {/* Update post button */}
      {edit && (
        <ButtonContainer ref={menuRef}>
          <Button color={blue} onClick={handlePut}>
            Update
          </Button>
          <Button color={"#808080"} onClick={() => setEdit(false)}>
            Cancel
          </Button>
        </ButtonContainer>
      )}

      {/* Icons */}
      <IconContainer>
        <FiMessageSquare style={{ ...Icons.other }} />
        <FiHeart style={{ ...Icons.other }} />
        <FiMail style={{ ...Icons.other }} />
      </IconContainer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 8rem;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
`;

// - inputs
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
const Name = styled.h3`
  margin-right: 0.5rem;
`;
const Username = styled.p`
  font-size: 14px;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;

  textarea {
    width: 100%;
    height: 5rem;
    resize: none;
    padding: 0.5rem;
  }
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Modal = styled.div`
  position: absolute;
  display: ${(props) => (props.toggle ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  button {
    padding: 0.3rem;
    margin: 0.5rem;
    background: none;
    border: none;
    outline: none;
    font-size: 18px;

    &:hover {
      color: ${blue};
    }
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  background: ${(props) => props.color};
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
    marginRight: ".5rem",
  },
  dots: {
    cursor: "pointer",
  },
  other: {
    marginRight: "1rem",
    fontSize: "18px",
  },
};
