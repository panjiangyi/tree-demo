import styled from "styled-components"

const Container = styled.button`
    background-color: transparent;
    border:none;
    cursor: pointer;
    color: var(--secondary-text-color);
    &:hover {
        opacity: 0.8;
    }
`
export const TextButton: React.FC = () => {
    return <Container>
        Cancel
    </Container>
}