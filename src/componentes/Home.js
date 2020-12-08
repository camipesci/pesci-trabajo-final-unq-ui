import {Link} from "react-router-dom";

import styled from 'styled-components';


const HomeStyled = styled.div`

 
      display: flex;
     
      justify-content: center;
      align-items: center;
      background-image: url("FondoHome.jpg");
      background-repeat: no-repeat;
      background-size: 1200px 600px; 
      background-position: center;
      background-color :pink;
      
    
      height: 100vh;
      text-rendering: optimizeLegibility;
      

    h1{
        font-size: 2rem;
        text-align: center;
        font-family: cursive;
        text-transform: uppercase;
        text-decoration: underline;
        color: black;
        padding : 1em;
        
    }
    h2{
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
        font-family: cursive;
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

    .boton-home{
        background-color: #5c79b3;
        border-radius: 15px;
        border: 2px solid  black;
        margin: 1px;
        padding: 11px;
        cursor:pointer;
        font: oblique bold 90% cursive;
        
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
                  
                     <Link to="/juego"><button className="boton-home grey"> Jugador vs Pc</button></Link>
               
                  </div>

                  <div className="dos-jugadores">
                      
                     <Link to="/juego2"><button className="boton-home grey"> Jugador 1 vs Jugador 2</button></Link>
                     
                  </div>
                  
                  <div className="reglas">
                      <Link to="/reglas"><button className="boton-home grey"> Reglas</button></Link>
                     
                  </div>
                  
          </div>
          </div>
  
          </HomeStyled>
  
      
    )



}

export default Home;