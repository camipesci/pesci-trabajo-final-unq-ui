import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`
    color: #06276b;
    padding 20px;
    border-radius: .5em;
    display: flex;
    justify-content: center;
    align-items:right;
    
    h2{
        font-size: 21px;
        line-height: 16px;
        font-weight: 700;
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


            </HeaderStyled>
        )

}

export default Header