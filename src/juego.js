import React, {useState } from 'react';
import styled from 'styled-components';
import Ficha from './ficha';

const JuegoStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 20px;
    &div: nth-of-type(3){

        grid-column:span 2;

    }
    .En-Juego{
        text-align: center;
        text-transform: uppercase;
    }


`
const fichas =[

    'papel',
    'tijera',
    'piedra',
    'spock',
    'lagarto',

]

function Juego(){

    const [jugadorEnJuego, setJugadorEnJuego] = useState (false) 
    const [tocar, setTocar] = useState('')
    
    function getRandomInt(min,max){
        return Math.floor(Math.random() * (max - min)) + min
    }

    function onClick(name){
         
        // fichas[getRandomInt(0,5)]
         setJugadorEnJuego(true)
         setTocar(name)
    }
        return(
            <JuegoStyled>
                {
                    !jugadorEnJuego ? (
                        <>
                            <Ficha name = "Piedra" onClick={onClick} />
                            <Ficha name = "Papel" onClick={onClick}/>
                            <Ficha name = "Tijera" onClick={onClick}/>
                            <Ficha name = "lagarto" onClick={onClick}/>
                            <Ficha name = "Spock" onClick={onClick}/>
                        </>
                    ) :(
                        <>
                            <div className = "En-Juego">

                                <Ficha name = {tocar} />
                                <p>Tu seleccion</p>
                            </div>
                      
                            <div className = "En-Juego">
                                <Ficha/>
                                <p>Maquina Seleccion</p>   
                            </div>

                            <div className = "resultado">
                                Jugar de Nuevo
                            </div>  
                        </>
                         )

                }
              
            </JuegoStyled>
        )

}

export default Juego