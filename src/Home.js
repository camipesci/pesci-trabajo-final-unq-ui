import {Link} from "react-router-dom";

import styled from 'styled-components';


const HomeStyled = styled.div`

 
      display: flex;
     
      justify-content: center;
      align-items: center;
      background: #f9d9d9; 
    
      height: 100vh;
      text-rendering: optimizeLegibility;
   

    h1{
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
        text-decoration: underline;
        color: black;
        padding : 1em;
    }
    h2{
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
        color: #5c79b3;
        padding : 1em;
    }



    .un-jugador{
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
        
    }

    .dos-jugadores{
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
        
        
    }

    .reglas{
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
        
       
    }

    
    
    }

  


`
function Home(){

    return(
        <HomeStyled>
        <div className="Juego">
                <h1>Bienvenido Al juego</h1>
                <h2> Piedra, Papel, Tijera, Lagarto, Spock </h2>
             
                <div className="menu-principal container">
                  <div className="un-jugador">
                  
                      <Link to="/juego">1 Jugador</Link>
               
                  </div>

                  <div className="dos-jugadores">
                      
                      <Link to="/juego2">2 Jugadores</Link>
                     
                  </div>
                  
                  <div className="reglas">
                      <Link to="/reglas">Reglas</Link>
                  </div>
                  
          </div>
          </div>
  
          </HomeStyled>
  
      
    )



}

export default Home;