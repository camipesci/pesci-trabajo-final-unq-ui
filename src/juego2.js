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
    const [resultado, setResultado] = useState('')
    const [jugadorEnJuego, setJugadorEnJuego] = useState (false) 
    const [jugadorEnJuego2, setJugadorEnJuego2] = useState (false) 
    const [tocar, setTocar] = useState('')
    const [tocar2, setTocar2] = useState('')
    const [puntajeJugador, setPuntajeJugador1] = useState(0);
    const [puntajeJugador2, setPuntajeJugador2] = useState(0);
   
    const onClick2 = (name2) => {
         
        setJugadorEnJuego2(true)
        setTocar2(name2)

        const resultado= enjuego()
        setResultado(resultado)
      

   }
    const onClick = (name) => {
         
         setJugadorEnJuego(true)
         setTocar(name)
       
         const resultado= enjuego()
         setResultado(resultado)

    }
  

    function enjuego(){
        const name = tocar
        const name2 = tocar2
        console.log("Name 1", tocar)
        console.log("Name 2", tocar2)

        if(!jugadorEnJuego || !jugadorEnJuego2){
            return '';
        }

        if (name2 === name){
                return 'Empate'
        }
        if(name ==='Papel' ){
            if(name2 === 'Tijera'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Perdiste'
            }
            if(name2 === 'Piedra'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
                
            }

            if(name2 === 'lagarto'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Perdiste'
            }

            if(name2 === 'Spock'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
            }

        }

        if(name ==='Tijera' ){
            if(name2 === 'Papel'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste';
                
            }
            if(name2 === 'lagarto'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
            }

            if(name2 === 'Spock'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Perdiste'
            }

            if(name2 === 'Piedra'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Perdiste'
            }
        }
         
        if(name ==='Piedra' ){
            if(name2 === 'Papel'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Perdiste'
            }
            if(name2 === 'lagarto'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
            }

            if(name2 === 'Spock'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Perdiste'
            }

            if(name2 === 'Tijera'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
            }
        }
         if(name ==='lagarto' ){
             if(name2 === 'Papel'){
                setPuntajeJugador1(puntajeJugador + 1);
                 return 'Ganaste'
             }
            if(name2 === 'Tijera'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Perdiste'
            }
    
             if(name2 === 'Spock'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
            }
    
            if(name2 === 'Piedra'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Perdiste'
            }
         }
        if(name ==='Spock' ){
            if(name2 === 'Papel'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Perdiste'
            }
            if(name2 === 'lagarto'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Perdiste'
             }
    
            if(name2 === 'Tijera'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
            }
    
            if(name2 === 'Piedra'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
            }
        }
    }


    function jugardenuevo(){
        setJugadorEnJuego(false)
        setJugadorEnJuego2(false)
    }
        return(
            <JuegoStyled>
                {
                    !jugadorEnJuego || !jugadorEnJuego2 ? (
                        <>
                            <h1>Jugador 1</h1>
                            <Ficha name = "Piedra" onClick={onClick} />
                            <Ficha name = "Papel" onClick={onClick}/>
                            <Ficha name = "Tijera" onClick={onClick}/>
                            <Ficha name = "lagarto" onClick={onClick}/>
                            <Ficha name = "Spock" onClick={onClick}/>
                            
                            <h1>Jugador 2</h1>

                            <Ficha name = "Piedra" onClick={onClick2} />
                            <Ficha name = "Papel" onClick={onClick2}/>
                            <Ficha name = "Tijera" onClick={onClick2}/>
                            <Ficha name = "lagarto" onClick={onClick2}/>
                            <Ficha name = "Spock" onClick={onClick}/>
                        </>
                    ) :(
                        <>
                            <div className = "En-Juego">

                                <Ficha name = {tocar} />
                                <p>Seleccion Jugador 1</p>
                            </div>
                      
                            <div className = "En-Juego">
                                <Ficha name = {tocar2}/>
                                <p>Seleccion Jugador 2</p>   
                            </div>

                            <div className = "resultado">
                                <h2>{resultado}</h2>
                                <h2>Puntaje Jugador 1 {puntajeJugador}</h2>
                                 <h2>Puntaje jugador 2 {puntajeJugador2}</h2>
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