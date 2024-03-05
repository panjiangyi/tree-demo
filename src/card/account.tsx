import styled from "styled-components"
import CosmosHubLogo from "@/assets/cosmos-hub-logo.svg?react"
import OsmoLogo from "@/assets/osmo.svg?react"
import EditIcon from "@/assets/edit.svg?react"
import React, { forwardRef, useEffect, useRef } from "react"
import { getHiddenAddress } from "@/utils/get-hidden-address"
const Container = styled.div`
    max-width: calc(50% - 10px);
    flex:1;
    color:#6a7685;
`
const Title = styled.div`
    margin-bottom: 1rem;
`

const Bar = styled.div`
    background-color: #141417;
    height: 50px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 4px;
    padding: 0 1rem;
`

const CusmosHubLogoWithMargin = styled(CosmosHubLogo)`
    margin-right: 4px;
`
const OsmoLogoWithMargin = styled(OsmoLogo)`
    margin-right: 4px;
`
const EditLogoWithMargin = styled(EditIcon)`
    margin-left: 4px;
    cursor: pointer;
`


const AddressRestContainer = styled.div`
    flex:1;
    border: none;
    height: 2px;
    background-image: radial-gradient(circle, #6a7685 1px, transparent 1px);
    background-size: 5px;
`
const AddressRest: React.FC = () => {
    return <AddressRestContainer></AddressRestContainer>
}

const AddressContainer = styled.div`
    flex:1;
    display:flex;
    align-items: center;
`



const Address: React.FC<{
    address: string;
}
> = (({ address }) => {
    const { first, last } = getHiddenAddress(address)
    return (
        <AddressContainer>
            {first} <AddressRest></AddressRest> {last}
        </AddressContainer>
    )
})

export const CosmosHubAccount: React.FC<{ address: string; }> = ({ address }) => {

    return <Container >
        <Title>From Cosmos Hub</Title>
        <Bar>
            <CusmosHubLogoWithMargin />
            <Address address={address} />
        </Bar>
    </Container>
}
export const OsmosisAccount: React.FC<{ address: string; }> = ({ address }) => {
    return <Container>
        <Title>To Osmosis</Title>
        <Bar>
            <OsmoLogoWithMargin />
            <Address address={address} />
            <EditLogoWithMargin />
        </Bar>
    </Container>
}

