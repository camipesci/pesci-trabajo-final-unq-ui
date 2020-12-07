import {Link} from "react-router-dom";
import './App.css';
import Wrapper from "./wrapper";
import styled from 'styled-components';


const HomeStyled = styled.div`


display: flex;

    justify-content: center;
    align-items: center;
    background: <img src={./tijera.svg}>
    
    height: 100vh;
    text-rendering: optimizeLegibility;
   

    h1{
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
        color: black;
    }

    .un-jugador{
        font-size: 3rem;
        text-align: center;
        text-transform: uppercase;
        color: black;
    }

    .dos-jugadores{
        font-size: 3rem;
        text-align: center;
        text-transform: uppercase;
        color: black;
    }

    .reglas{
        font-size: 3rem;
        text-align: center;
        text-transform: uppercase;
        color: black;
    }
    
    }

  


`
function Home(){

    return(
        <HomeStyled>
        <div className="Juego">
                <h1>Bienvenido Al juego</h1>
                <h1> Piedra, Papel, Tijera, Lagarto, Spock </h1>
             
              
                  <div className="un-jugador">
                  
                      <Link className="btn-small black" to="/juego">1 Jugador</Link>
               
                  </div>

                  <div className="dos-jugadores">
                      
                      <Link className="btn-small black" to="/juego2">2 Jugadores</Link>
                     
                  </div>
                  
                  <div className="reglas">
                      <Link className="btn-small black" to="/reglas">Reglas</Link>
                  </div>
                  
          </div>
  
          </HomeStyled>
  
      
    )



}

export default Home;