import React, {useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Ficha from './ficha';
import Boton from './boton';
import Casa from "../imagenes/casa.svg";


const JuegoStyled = styled.div`
background-image: url("FondoJuego.jpg");
      background-repeat: no-repeat;
      background-size: 1300px 600px; 
      background-position: center;
      background-color :pink;
height: 100vh;
display: flex;
justify-content: center;
grid-gap: 10px;
align-items: center;
flex-direction: row;

.inicio{
    isplay: flex;
    justify-content: center;
    grid-gap: 10px;
    align-items: center;
    

.j1{
    display: flex;
    justify-content: center;
    grid-gap: 10px;
    align-items: center;
    padding : 2em;

}

.j2{
    display: flex;
    justify-content: center;
    grid-gap: 10px;
    align-items: center;

}
}


.fichas{
    display: flex;
    justify-content: center;
    grid-gap: 10px;
    align-items: center;
}
.resultado{
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2{
        text-transform: uppercase;
        font-family: cursive;
    }

    .boton-home{
        background-color: #5c79b3;
        border-radius: 10px;
        border: 2px solid  black;
        margin: 50px;
        
        padding: 1px;
        cursor:pointer;
        
    }

    .En-Juego{
       
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
        grid-gap: 10px;
       
        
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
                        
                            <div className = "inicio">
                                <div className = "j1">
                                    <h1>Jugador 1</h1>
                                    <Ficha name = "Piedra" onClick={() => {onClick("Piedra")}} />
                                    <Ficha name = "Papel" onClick={() => {onClick("Papel")}}/>
                                    <Ficha name = "Tijera" onClick={() => {onClick("Tijera")}}/>
                                    <Ficha name = "lagarto" onClick={() => {onClick("lagarto")}}/>
                                    <Ficha name = "Spock" onClick={() => {onClick("Spock")}}/>
                                </div>
                                <div className = "j2">
                                    <h1>Jugador 2</h1>
                                    <Ficha name = "Piedra" onClick={() => {onClick2("Piedra")}} />
                                    <Ficha name = "Papel" onClick={() => {onClick2("Papel")}}/>
                                    <Ficha name = "Tijera" onClick={() => {onClick2("Tijera")}}/>
                                    <Ficha name = "lagarto" onClick={() => {onClick2("lagarto")}}/>
                                    <Ficha name = "Spock" onClick={() => {onClick2("Spock")}}/>
                                </div>
                            </div>
                        </>
                    ) :(
                        <>
                            

                            <div className = "resultado">
                            <div className = "En-Juego">
                                <h1>-Jugador 1-</h1>
                                <Ficha name = {tocar} />
                                
                                
                                <Ficha name = {tocar2}/>
                                <h1>-Jugador 2-</h1> 
                                  
                            </div>
                                <h2>{resultado}</h2>
                                <h2>Puntaje Jugador 1 = {puntajeJugador}</h2>
                                <h2>Puntaje jugador 2 = {puntajeJugador2}</h2>
                                <Boton onClick ={jugardenuevo}>
                                    Jugar de nuevo
                                </Boton>

                                <div className="row">
                                     <div className="main-menu">
                                        <Link to="/"><button className="boton-home" ><img src={Casa} className="home" width="50" height="40"/></button></Link>
                                     </div>
                                 </div>
                            </div>  

                            
                        </>
                         )

                }
              
            </JuegoStyled>
        )

}

export default Juego