import styled from "styled-components";

const Container = styled.div`
    color:#fff;
    width:500px;
    height:550px;
    background-color: #212428;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
`;

const Title = styled.h2`
  font-weight: 400;
`;

export const Card: React.FC = () => {
    return <Container>
        <Title>Deposit ATOM</Title>
    </Container>
}