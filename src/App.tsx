import styled from 'styled-components';
import { Card } from './card'


const Container = styled.div`
    padding: 4em;
`;

function App() {

  return (
    <Container>
      <Card />
    </Container>
  )
}

export default App
