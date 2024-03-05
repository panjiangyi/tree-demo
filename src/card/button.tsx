import styled from "styled-components"

const Container = styled.button`
    background-color: #fff;
    font-weight: bold;
    border:none;
    width:100%;
    height: 70px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`
export const Button: React.FC = () => {
    return <Container>
        Transfer
    </Container>
}