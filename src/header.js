import React from 'react';
import styled from 'styled-components';
import Puntaje from './puntaje'

const HeaderStyled = styled.div`
    color: grey;
    padding 13px;
    border-radius: .5em;
    display: flex;
    justify-content: space-between;
    align-items:right;
    
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
                   
                   Piedra-Papel-Tijera-Lagarto-Spock
                   <br></br>
                   <br></br>
    
                </h2>


                <Puntaje/>
               
            </HeaderStyled>
        )

}

export default Header