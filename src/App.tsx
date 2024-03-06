import styled from "styled-components";
import { Card } from "./card";
import { useState } from "react";

const RangeInput: React.FC<{
  label: string;
  value: number;
  onChange: (v: number) => void;
  max: number;
  min: number;
}> = ({ value, min, max, onChange, label }) => {
  return (
    <div>
      <input
        type="range"
        name="range"
        min={min}
        max={max}
        value={value}
        step="10"
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <label>{label}</label>
    </div>
  );
};

const Checkbox: React.FC<{
  checked: boolean;
  onChange: (v: boolean) => void;
}> = ({ checked, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="Theme"
        name="Theme"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor="Theme"> Theme</label>
      <br></br>
    </div>
  );
};

const Container = styled.div`
  padding: 4em;
`;

const changeTheme = (isDay: boolean) => {
  if (isDay) {
    document.documentElement.style.setProperty("--main-text-color", "#2a3035");
    document.documentElement.style.setProperty(
      "--secondary-text-color",
      "#5e6b7d"
    );
    document.documentElement.style.setProperty("--contract-text-color", "#fff");
    document.documentElement.style.setProperty(
      "--main-background-color",
      "#fff"
    );
    document.documentElement.style.setProperty(
      "--secondary-background-color",
      "#eef2f8"
    );
    document.documentElement.style.setProperty(
      "--contract-background-color",
      "#212428"
    );
  } else {
    document.documentElement.style.setProperty("--main-text-color", "#fff");
    document.documentElement.style.setProperty(
      "--secondary-text-color",
      "#6a7685"
    );
    document.documentElement.style.setProperty(
      "--contract-text-color",
      "#212428"
    );
    document.documentElement.style.setProperty(
      "--main-background-color",
      "#212428"
    );
    document.documentElement.style.setProperty(
      "--secondary-background-color",
      "#131417"
    );
    document.documentElement.style.setProperty(
      "--contract-background-color",
      "#fff"
    );
  }
};

function App() {
  const [cardWidth, setCardWidth] = useState(500);
  const [isDayTheme, setThemeType] = useState(false);
  return (
    <Container>
      <RangeInput
        label="Change Card Width"
        value={cardWidth}
        max={1000}
        min={500}
        onChange={setCardWidth}
      />
      <Checkbox
        checked={isDayTheme}
        onChange={(_isDayTheme) => {
          setThemeType(_isDayTheme);
          changeTheme(_isDayTheme);
        }}
      />
      <Card width={cardWidth} />
    </Container>
  );
}

export default App;
