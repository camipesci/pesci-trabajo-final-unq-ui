import {BrowserRouter, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import Juego from './juego';
import Juego2 from './juego2';
import Home from './Home';
import Reglas from './reglas';


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
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component ={ Home } />
      <Route exact path="/juego" component = {Juego}/>
      <Route exact path="/juego2" component = {Juego2}/>
      <Route exact path="/reglas" component = {Reglas}/>
      <Route path="*" render= {() => <h1>Not Found</h1>} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
