import styled from "styled-components";
import { CloseButton } from "./close";
import { CosmosHubAccount, OsmosisAccount } from "./account";
import ArrowIcon from "@/assets/arrow.svg?react"
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
const Header = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`
const AccountsContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
`

const ArrowIcon$ = styled(ArrowIcon)`
    flex:1;
    margin:0 4px;
    position: relative;
    top: 15px;
`

export const Card: React.FC = () => {
    return <Container>
        <Header>
            <Title>Deposit ATOM</Title>
            <CloseButton />
        </Header>
        <AccountsContainer>
            <CosmosHubAccount />
            <ArrowIcon$ />
            <OsmosisAccount />
        </AccountsContainer>
    </Container>
}