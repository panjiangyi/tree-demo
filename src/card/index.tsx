import styled from "styled-components";
import { CloseButton } from "./close";
import { CosmosHubAccount, OsmosisAccount } from "./account";
import ArrowIcon from "@/assets/arrow.svg?react"
import { Time } from "./time";
import { Button } from "./button";
import { TextButton } from "./text-button";
import { Amount, } from "./amount";
const Container = styled.div`
    color:#fff;
    width:500px;
    background-color: #212428;
    padding: 0.5rem 1rem 1rem;
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
    flex-shrink:0;
    flex-grow:0;
    margin:0 4px;
    position: relative;
    top: 15px;
`
const TransferButton = styled.div`
    margin-top:1rem;
`
const CancelButtonCon = styled.div`
    text-align: center;
    margin-top:1rem;
`

export const Card: React.FC = () => {
    return <Container>
        <Header>
            <Title>Deposit ATOM</Title>
            <CloseButton />
        </Header>
        <AccountsContainer>
            <CosmosHubAccount address="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" />
            <ArrowIcon$ />
            <OsmosisAccount address="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" />
        </AccountsContainer>
        <Amount maxAmount={2} />
        <Time />
        <TransferButton>
            <Button />
        </TransferButton>
        <CancelButtonCon>
            <TextButton />
        </CancelButtonCon>
    </Container>
}