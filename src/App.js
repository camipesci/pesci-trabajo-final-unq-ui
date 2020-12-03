import './App.css';
import Header from'./header';
import styled from 'styled-components';
import Wrapper from './wrapper';
import Juego from './juego';


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
        <Juego />

      </Wrapper>
    
    </AppStyled>
  );
}

export default App;
