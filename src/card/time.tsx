import styled from "styled-components"
import Clock from "@/assets/clock-five.svg?react";
const Container = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #151417;
    margin-top: 30px;
    padding:0 1rem;
`


const ClockWithMargin = styled(Clock)`
    margin-right: 8px;
`
export const Time = () => {
    return <Container><ClockWithMargin />Estimated time: 20 seconds</Container>
}