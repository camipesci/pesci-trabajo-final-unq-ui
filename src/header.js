import React from 'react';
import styled from 'styled-components';
import Puntaje from './puntaje'

const HeaderStyled = styled.div`
    color: black;
    padding 12px;
    border-radius: .5em;
    display: flex;
    justify-content: space-between;
    align-items:center;
    border: 3px Solid rgba(150,150,150, 29);
    h2{
        font-size: 18px;
        line-height: 20px;
        font-weight: 700;
        text-transform: uppercase;
    }
`

function Header(){

        return(
            <HeaderStyled>
                
                <h2> 
                    Bienvenido al juego 
                    <br/>Piedra<br/>Papel<br/>tijera<br/>lagarto<br/>Spock
                   
                </h2>

                

                <Puntaje/>
               
            </HeaderStyled>
        )

}

export default Header