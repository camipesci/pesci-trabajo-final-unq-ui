import React from 'react';
import ReglasJuego from '../imagenes/reglas.png';
import Casa from '../imagenes/casa.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ReglasStyled = styled.div`

   text-align : center;
   background-image: url("FondoJuego.jpg");
   background-repeat: no-repeat;
   background-size: 1300px 600px; 
   background-position: center;
   background-color :pink;
   height: 100vh;

    .reglas{

        
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        h2{
            color:black;
            text-decoration: underline;
        }

        .boton-home{
            background-color: #5c79b3;
            border-radius: 5px;
            border: 2px solid  black;
            margin: 40px;
            
            padding: 1px;
            cursor:pointer;
            
            
        }

    }
  




`

function Reglas (){
    return(
       
            <ReglasStyled>
                             
                            
                        
                        <div className="reglas">
                            <h2>REGLAS DEL JUEGO</h2>
                            <img src={ReglasJuego} width="500" height="400"alt="Reglas de Juego" />

                            <div className="main-menu">
                            <Link to="/"><button className="boton-home grey" ><img src={Casa} className="home" width="50" height="40"/></button></Link>
                            </div>
                        </div>               
                    
                        
                        
                       
           
      
            </ReglasStyled>
    
    )
}

export default Reglas;