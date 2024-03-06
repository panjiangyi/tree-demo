import styled from "styled-components";
import CosmosHubLogo from "@/assets/cosmos-hub-logo.svg?react";
import { useState } from "react";
import { safeRound } from "@/utils/safe-number";

const Container = styled.div`
  color: var(--secondary-text-color);
  margin-top: 32px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InputContainer = styled.div`
  display: flex;
  height: 68px;
  border: 1px solid #31373e;
  border-radius: 4px;
  padding-right: 1em;
  margin: 13px 0;
`;
const CosmosHubLogoContainer = styled.div`
  flex: 0 0 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #31373e;
  & .cosmos-logo {
    height: 39px;
    width: 39px;
  }
`;

const UnitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .unit-symbol {
    color: var(--main-text-color);
  }
  .unit-usd {
    font-size: 0.8em;
    margin-left: 0.5em;
  }
`;
const Unit: React.FC<{ value: number }> = ({ value }) => {
  return (
    <UnitContainer>
      <span className="unit-symbol">Atom</span>
      <span className="unit-usd">≈ ${(value * 515).toLocaleString()}</span>
    </UnitContainer>
  );
};

const Input$ = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  line-height: 68px;
  padding-left: 1em;
  color: var(--main-text-color);
`;
const Input: React.FC<{
  maxValue: number;
  value: number;
  onChange: (v: number) => void;
}> = ({ maxValue, value, onChange }) => {
  return (
    <InputContainer>
      <CosmosHubLogoContainer>
        <CosmosHubLogo className="cosmos-logo" />
      </CosmosHubLogoContainer>
      <Input$
        max={maxValue}
        type="number"
        value={value}
        onChange={(e) => {
          const v = Number(e.target.value);
          onChange(Math.min(maxValue, v));
        }}
        autoFocus
      />
      <Unit value={value} />
    </InputContainer>
  );
};

const Shortcut = styled.div`
  display: inline-block;
  line-height: 27px;
  background-color: var(--secondary-background-color);
  cursor: pointer;
  text-align: center;
  padding: 0 4px;
  border-radius: 4px;
  font-size: 13px;
  & + & {
    margin-left: 1em;
  }
`;

const ShortcutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Amount: React.FC<{
  maxAmount: number;
}> = ({ maxAmount }) => {
  const [value, setValue] = useState(0);
  return (
    <Container>
      <TitleContainer>
        <div>Select amount</div>
        <div>Avaliable {maxAmount} ATOM</div>
      </TitleContainer>
      <Input maxValue={maxAmount} value={value} onChange={(v) => setValue(v)} />
      <ShortcutContainer>
        <Shortcut onClick={() => setValue(maxAmount)}>Max</Shortcut>
        <Shortcut onClick={() => setValue(safeRound(maxAmount / 2))}>
          1/2
        </Shortcut>
        <Shortcut onClick={() => setValue(safeRound(maxAmount / 3))}>
          1/3
        </Shortcut>
      </ShortcutContainer>
    </Container>
  );
};
