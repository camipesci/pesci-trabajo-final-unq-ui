import './App.css';
import Header from'./header';
import styled from 'styled-components';
import Wrapper from './wrapper';
import Juego from './juego';



const AppStyled = styled.main`
  background: #f7d7d7;
  min-height:100vh;
  padding: 4em 0;
  box-sizing: border-box
  .app-content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

`



function App() {
  return (
    <AppStyled>
      <Wrapper>
      <h1>Bienvenido al juego</h1>
        <div classNme= "app-content">
        <Header/>
        <Juego />
        

        </div>
        
      </Wrapper>
    
    </AppStyled>
  );
}

export default App;
