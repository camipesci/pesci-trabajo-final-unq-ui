import Header from'./header';
import styled from 'styled-components';
import Wrapper from './wrapper';
import Juego from './juego';
import Juego2 from './juego2';
import Home from './Home';


const AppStyled = styled.main`
  background: #c9d6ed;
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
        <div classNme= "app-content"> 
            <Header/>
            <Juego2 />
        </div>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
