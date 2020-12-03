import './App.css';
import Header from'./header';
import styled from 'styled-components';
import Wrapper from './wrapper';


const AppStyled = styled.main`
  background: #efacac;
  min-height:100vh;
  padding: 4em 0;

`



function App() {
  return (
    <AppStyled>
      <Wrapper>

        <Header/>

      </Wrapper>
    
    </AppStyled>
  );
}

export default App;
