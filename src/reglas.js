import React from 'react';
import ReglasJuego from './reglas.png';
import Casa from './casa.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ReglasStyled = styled.div`

   text-align : center;
   background: #f9d9d9;
   height: 100vh;

    .reglas{

        
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        h2{
            color:black;
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
                            <Link to="/"><button className="boton-home grey" ><img src={Casa} className="home" width="50" height="60"/></button></Link>
                            </div>
                        </div>               
                    
                        
                        
                       
           
      
            </ReglasStyled>
    
    )
}

export default Reglas;