import List from "../components/List";
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: hsl(180, 52%, 96%);
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