import React from 'react';
import styled from 'styled-components'

const FichaStyled = styled.div`
    width: 130px;
    height: 130px;
    border: 10px solid grey;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
`

function Ficha({name}){

        return(
            <FichaStyled>
                {name}
                <img src={`./${name}.svg`} alt=""/>
            </FichaStyled>
        )

}

export default Ficha