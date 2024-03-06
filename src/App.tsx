import styled from 'styled-components';
import { Card } from './card'
import { useState } from 'react';


const RangeInput: React.FC<{
  label: string;
  value: number;
  onChange: (v: number) => void;
  max: number;
  min: number;
}> = ({
  value, min, max, onChange, label,
}) => {
    return <div>
      <input type="range"
        name="range"
        min={min}
        max={max}
        value={value}
        step="10"
        onChange={(e) => onChange(Number(e.target.value))} />
      <label>{label}</label>
    </div>

  }


const Container = styled.div`
    padding: 4em;
`;

function App() {
  const [cardWidth, setCardWidth] = useState(500)
  return (
    <Container>
      <p>
        <RangeInput label="Change Card Width" value={cardWidth} max={1000} min={500} onChange={setCardWidth} />
      </p>
      <Card width={cardWidth} />
    </Container>
  )
}

export default App
