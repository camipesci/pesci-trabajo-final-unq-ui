import React, {useState } from 'react';
import styled from 'styled-components';
import Ficha from './ficha';
import Boton from './boton';

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

    .resultado{
        text-align: center;
        h2{
            text-transform: uppercase;
        }
    }


`
const fichas =[

    'Papel',
    'Tijera',
    'Piedra',
    'Spock',
    'lagarto',

]

function Juego(){
    const[resultado, setResultado] = useState('')
    const [fichaMaquina, setfichaMaquina ] = useState('default')
    const [jugadorEnJuego, setJugadorEnJuego] = useState (false) 
    const [tocar, setTocar] = useState('')
    
    function getRandomInt(min,max){
        return Math.floor(Math.random() * (max - min)) + min
    }

    function onClick(name){
         
         setJugadorEnJuego(true )
         setTocar(name)
         const fichaMaquina = fichas[getRandomInt(0,5)]
         setfichaMaquina(fichaMaquina)
         const resultado= enjuego(name, fichaMaquina)
         setResultado(resultado)

    }

    function enjuego(name, fichaMaquina){
        if (fichaMaquina === name){
                return 'Empate'
        }
        if(name ==='Papel' ){
            if(fichaMaquina === 'Tijera'){
                return 'Perdiste'
            }
            if(fichaMaquina === 'Piedra'){
                return 'Ganaste'
            }

            if(fichaMaquina === 'lagarto'){
                return 'Perdiste'
            }

            if(fichaMaquina === 'Spock'){
                return 'Ganaste'
            }

        }

        if(name ==='Tijera' ){
            if(fichaMaquina === 'Papel'){
                return 'Ganaste'
            }
            if(fichaMaquina === 'lagarto'){
                return 'Ganaste'
            }

            if(fichaMaquina === 'Spock'){
                return 'Perdiste'
            }

            if(fichaMaquina === 'Piedra'){
                return 'Perdiste'
            }
        }
         
        if(name ==='Piedra' ){
            if(fichaMaquina === 'Papel'){
                return 'Perdiste'
            }
            if(fichaMaquina === 'lagarto'){
                return 'Ganaste'
            }

            if(fichaMaquina === 'Spock'){
                return 'Perdiste'
            }

            if(fichaMaquina === 'Tijera'){
                return 'Ganaste'
            }
        }
         if(name ==='lagarto' ){
             if(fichaMaquina === 'Papel'){
                 return 'Ganaste'
             }
            if(fichaMaquina === 'Tijera'){
                return 'Perdiste'
            }
    
             if(fichaMaquina === 'Spock'){
                return 'Ganaste'
            }
    
            if(fichaMaquina === 'Piedra'){
                return 'Perdiste'
            }
         }
        if(name ==='Spock' ){
            if(fichaMaquina === 'Papel'){
                return 'Perdiste'
            }
            if(fichaMaquina === 'lagarto'){
                return 'Perdiste'
             }
    
            if(fichaMaquina === 'Tijera'){
                return 'Ganaste'
            }
    
            if(fichaMaquina === 'Piedra'){
                return 'Ganaste'
            }
        }
    }


    function jugardenuevo(){
        setJugadorEnJuego(false)
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
                                <Ficha name = {fichaMaquina}/>
                                <p>Maquina Seleccion</p>   
                            </div>

                            <div className = "resultado">
                                <h2>{resultado}</h2>
                                <Boton onClick ={jugardenuevo}>
                                    Jugar de nuevo
                                </Boton>
                            </div>  
                        </>
                         )

                }
              
            </JuegoStyled>
        )

}

export default Juego