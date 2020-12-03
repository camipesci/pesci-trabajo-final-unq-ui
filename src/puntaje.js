import React from 'react';
import styled from 'styled-components'

const PuntajeStyled = styled.div`
    background: White;
    text-align: center;
    padding:10px 0;
    border-radius: 8px;
    width: 100px;

    small{
        color: #2a45c2;
        text-transform : uppercase;
        font-size: 10px;
        font-weight:bold;
    }
    p{
        color: #565468;
        font-size: 40px;
        margin: 0;
        font-weight: 700;
    }
`

function Puntaje(){

        return(
            <PuntajeStyled>
              <small>Puntaje</small>
              <p>30</p>
            </PuntajeStyled>
        )

}

export default Puntaje