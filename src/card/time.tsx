import styled from "styled-components";
import Clock from "@/assets/clock-five.svg?react";
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: var(--secondary-background-color);
  margin-top: 30px;
  padding: 0 1rem;
  font-size: 14px;
`;

const ClockWithMargin = styled(Clock)`
  margin-right: 8px;
`;
const CountingDown = styled.span`
  font-weight: bold;
  margin-left: 0.5em;
`;
export const Time = () => {
  return (
    <Container>
      <ClockWithMargin />
      Estimated time: <CountingDown> 20 seconds</CountingDown>
    </Container>
  );
};
