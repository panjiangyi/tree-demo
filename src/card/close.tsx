import styled from "styled-components"

const Container = styled.div`
    background-color: #2c3137;
    color:#fff;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    &:hover {
      opacity: 1;
    }
    &:before, &:after {
        position: absolute;
        left: 15px;
        top: 8px;
        content: ' ';
        height: 18px;
        width: 2px;
        background-color: #fff;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`
export const CloseButton: React.FC = () => {
    return <Container className="fuck"></Container>
}