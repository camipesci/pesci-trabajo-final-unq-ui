import React from 'react';
import styled from 'styled-components';
import Ficha from './ficha';

const JuegoStyled = styled.div`
    display: flex;
    flex-wrap: wrap:
`

function Juego(){

        return(
            <JuegoStyled>
               <Ficha name = "Piedra" />
               <Ficha name = "Papel"/>
               <Ficha name = "Tijera"/>
               <Ficha name = "lagarto"/>
               <Ficha name = "Spock"/>
            </JuegoStyled>
        )

}

export default Juego