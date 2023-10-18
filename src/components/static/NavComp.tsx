import React from "react";
import styled from "styled-components";

interface iProps {
  bg?: string;
  text?: string;
  value?: any;
  onClick: any;
}
const NavComp: React.FC<iProps> = ({ bg, text, value, onClick }) => {
  return (
    <div>
      <Container bg={bg} onClick={onClick}>
        <Txt value={value} bg={bg}>
          {text}
        </Txt>
      </Container>
    </div>
  );
};

export default NavComp;

const Txt = styled.button<{ bg?: string }>`
  font-size: 12px;
  color: ${({ bg }) => (bg ? "white" : "black")};
  border: none;
  background-color: transparent;
`;
const Container = styled.div<{ bg?: string }>`
  padding: 8px 20px;
  background-color: ${({ bg }) => (bg ? "black" : "#E5E5E5")};
  border-radius: 5px;
  margin: 10px 5px;
`;
