import styled from "styled-components";

const Container = styled.button`
  background-color: var(--contract-background-color);
  color: var(--contract-text-color);
  font-weight: bold;
  border: none;
  width: 100%;
  height: 70px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const Button: React.FC = () => {
  return <Container>Transfer</Container>;
};
