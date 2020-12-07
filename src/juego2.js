import React, {useState } from 'react';
import styled from 'styled-components';
import Ficha from './ficha';
import Boton from './boton';
import { Link } from 'react-router-dom';
import Casa from './casa.svg';


const JuegoStyled = styled.div`
    align-items: center;
    background: #cde1c3;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 50px;
    
    
   
   
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

function Juego(){
    const [resultado, setResultado] = useState('')
    const [jugadorEnJuego, setJugadorEnJuego] = useState (false) 
    const [jugadorEnJuego2, setJugadorEnJuego2] = useState (false) 
    const [tocar, setTocar] = useState()
    const [tocar2, setTocar2] = useState()
    const [puntajeJugador, setPuntajeJugador1] = useState(0);
    const [puntajeJugador2, setPuntajeJugador2] = useState(0);
   
    const onClick = (name) => {
        setJugadorEnJuego(true)
        setTocar(name)
    }
  
    const onClick2 = (name) => {
        
        setJugadorEnJuego2(true)
        setTocar2(name)
        const resultado= enjuego(tocar, name)
        setResultado(resultado)

    }
  
    function enjuego(name, name2){
       
        
        

        if (name2 === name){
                return 'Empate'
        }
        if(name ==='Papel' ){
            if(name2 === 'Tijera'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Gano Jugador 2'
            }
            if(name2 === 'Piedra'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Gano Jugador 1'
                
            }

            if(name2 === 'lagarto'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Gano Jugador 2'
            }

            if(name2 === 'Spock'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Gano Jugador 1'
            }

        }

        if(name ==='Tijera' ){
            if(name2 === 'Papel'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Gano Jugador 1';
                
            }
            if(name2 === 'lagarto'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Gano Jugador 1'
            }

            if(name2 === 'Spock'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Gano Jugador 2'
            }

            if(name2 === 'Piedra'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Gano Jugador 2'
            }
        }
         
        if(name ==='Piedra' ){
            if(name2 === 'Papel'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Gano Jugador 2'
            }
            if(name2 === 'lagarto'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Gano Jugador 1'
            }

            if(name2 === 'Spock'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Gano Jugador 2'
            }

            if(name2 === 'Tijera'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Gano Jugador 1'
            }
        }
         if(name ==='lagarto' ){
             if(name2 === 'Papel'){
                setPuntajeJugador1(puntajeJugador + 1);
                 return 'Gano Jugador 1'
             }
            if(name2 === 'Tijera'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Gano Jugador 2'
            }
    
             if(name2 === 'Spock'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Gano Jugador 1'
            }
    
            if(name2 === 'Piedra'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Gano Jugador 2'
            }
         }
        if(name ==='Spock' ){
            if(name2 === 'Papel'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Gano Jugador 2'
            }
            if(name2 === 'lagarto'){
                setPuntajeJugador2(puntajeJugador2 + 1);
                return 'Gano Jugador 2'
             }
    
            if(name2 === 'Tijera'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Gano Jugador 1'
            }
    
            if(name2 === 'Piedra'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Gano Jugador 1'
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
                        
                            <h1>JUGADOR 1</h1>
                            <Ficha name = "Piedra" onClick={() => {onClick("Piedra")}} />
                            <Ficha name = "Papel" onClick={() => {onClick("Papel")}}/>
                            <Ficha name = "Tijera" onClick={() => {onClick("Tijera")}}/>
                            <Ficha name = "lagarto" onClick={() => {onClick("lagarto")}}/>
                            <Ficha name = "Spock" onClick={() => {onClick("Spock")}}/>
                            
                            <h1>JUGADOR 2</h1>

                            <Ficha name = "Piedra" onClick={() => {onClick2("Piedra")}} />
                            <Ficha name = "Papel" onClick={() => {onClick2("Papel")}}/>
                            <Ficha name = "Tijera" onClick={() => {onClick2("Tijera")}}/>
                            <Ficha name = "lagarto" onClick={() => {onClick2("lagarto")}}/>
                            <Ficha name = "Spock" onClick={() => {onClick2("Spock")}}/>
                        
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

                            <div className="row">
                            <div className="main-menu">
                                <Link to="/"><button className="boton-home grey" ><img src={Casa} className="home" width="50" height="60"/></button></Link>
                            </div>
                            </div>
                        </>
                         )

                }
              
            </JuegoStyled>
        )

}

export default Juego