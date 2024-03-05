import styled from "styled-components"
import CosmosHubLogo from "@/assets/cosmos-hub-logo.svg?react"
import OsmoLogo from "@/assets/osmo.svg?react"
import EditIcon from "@/assets/edit.svg?react"
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

const AddressContainer = styled.div`
    flex:1;
`
const Address = () => {
    return <AddressContainer>
        atomsdfdsafdfadsffdsf
    </AddressContainer>
}

export const CosmosHubAccount: React.FC = () => {
    return <Container>
        <Title>From Cosmos Hub</Title>
        <Bar>
            <CusmosHubLogoWithMargin />
            <Address />
        </Bar>
    </Container>
}
export const OsmosisAccount: React.FC = () => {
    return <Container>
        <Title>To Osmosis</Title>
        <Bar>
            <OsmoLogoWithMargin />
            <Address />
            <EditLogoWithMargin />
        </Bar>
    </Container>
}

