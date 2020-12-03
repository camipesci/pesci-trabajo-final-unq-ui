import React from 'react';
import styled from 'styled-components';
import Puntaje from './puntaje'

const HeaderStyled = styled.div`
    color: black;
    padding 23px;
    border-radius: .5em;
    border: 3px Solid rgba(150,150,150, 29);
    h2{
        font-size: 21px;
        text-transform: uppercase;
    }
`

function Header(){

        return(
            <HeaderStyled>
                
                <h2> 
                    Bienvenido al juego <br/>Piedra<br/>Papel<br/>tijera<br/>lagarto<br/>Spock
                </h2>
               
            </HeaderStyled>
        )

}

export default Header