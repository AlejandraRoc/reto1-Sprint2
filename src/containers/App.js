import List from "../components/list";
import styled from 'styled-components'

const StyledContainer = styled.div`
  background-color: #73BCBA;
  color: white;
  font-size: 32px;
`

function App() {
  return (
    <StyledContainer>
      <List />
    </StyledContainer>
  );
}

export default App;