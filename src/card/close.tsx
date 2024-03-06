import styled from "styled-components";

const Container = styled.div`
  background-color: var(--secondary-background-color);
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  &:hover {
    opacity: 0.8;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    top: 8px;
    content: " ";
    height: 18px;
    width: 2px;
    background-color: var(--main-text-color);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
export const CloseButton: React.FC = () => {
  return <Container></Container>;
};
