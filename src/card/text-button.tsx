import styled from "styled-components"

const Container = styled.button`
    background-color: transparent;
    border:none;
    cursor: pointer;
    color: #6a7685;
    &:hover {
        opacity: 0.8;
    }
`
export const TextButton: React.FC = () => {
    return <Container>
        Cancel
    </Container>
}