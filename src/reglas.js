import React from 'react';
import ReglasJuego from './reglas.png';
import Casa from './casa.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ReglasStyled = styled.div`
align-items: center;
    background: #cde1c3;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 20px;
    align-items: center;

    .reglas-div{
        text-align: center;
        text-transform: uppercase;

   
    }




`

function Reglas (){
    return(
       
            <ReglasStyled>
            <div className="reglas-div">                    
                            <h1>Reglas</h1>
                        
                        <div className="row col s12 center">
                            <img src={ReglasJuego} width="440" height="352" />
                        </div>               
                    
                        <div className="row">
                            <div className="main-menu">
                                <Link to="/"><button className="boton-home grey" ><img src={Casa} className="home" width="50" height="60"/></button></Link>
                            </div>
            </div>
            </div>
      
            </ReglasStyled>
    
    )
}

export default Reglas;