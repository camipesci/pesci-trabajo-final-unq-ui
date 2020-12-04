import React from 'react';
import styled from 'styled-components';
import Puntaje from './puntaje'

const HeaderStyled = styled.div`
    color: grey;
    padding 20px;
    border-radius: .5em;
    display: flex;
    justify-content: center;
    align-items:right;
    
    h2{
        font-size: 30px;
        line-height: 12px;
        font-weight: 400;
        text-transform: uppercase;
        justify-content: center;
       
    }
`

function Header(){

        return(
            <HeaderStyled>
                
                <h2> 
                   
                   Piedra-Papel-Tijera-Lagarto-Spock
    
                </h2>


              {/*  <Puntaje/>
               */}
            </HeaderStyled>
        )

}

export default Header