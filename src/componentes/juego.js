import React, {useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Ficha from './ficha';
import Boton from './boton';
import Casa from '../imagenes/casa.svg';


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
    
    .menu{
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
       
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
            margin: 60px;
            
            padding: 5px;
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
    const [puntajeJugador, setPuntajeJugador1] = useState(0);
    const [puntajeMaquina, setPuntajeMaquina] = useState(0);
    
    function getRandomInt(min,max){
        return Math.floor(Math.random() * (max - min)) + min
    }

    function onClick(name){
         
         setJugadorEnJuego(true)
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
                setPuntajeMaquina(puntajeMaquina + 1);
                return 'Perdiste'
            }
            if(fichaMaquina === 'Piedra'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
                
            }

            if(fichaMaquina === 'lagarto'){
                setPuntajeMaquina(puntajeMaquina + 1);
                return 'Perdiste'
            }

            if(fichaMaquina === 'Spock'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
            }

        }

        if(name ==='Tijera' ){
            if(fichaMaquina === 'Papel'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste';
                
            }
            if(fichaMaquina === 'lagarto'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
            }

            if(fichaMaquina === 'Spock'){
                setPuntajeMaquina(puntajeMaquina + 1);
                return 'Perdiste'
            }

            if(fichaMaquina === 'Piedra'){
                setPuntajeMaquina(puntajeMaquina + 1);
                return 'Perdiste'
            }
        }
         
        if(name ==='Piedra' ){
            if(fichaMaquina === 'Papel'){
                setPuntajeMaquina(puntajeMaquina + 1);
                return 'Perdiste'
            }
            if(fichaMaquina === 'lagarto'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
            }

            if(fichaMaquina === 'Spock'){
                setPuntajeMaquina(puntajeMaquina + 1);
                return 'Perdiste'
            }

            if(fichaMaquina === 'Tijera'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
            }
        }
         if(name ==='lagarto' ){
             if(fichaMaquina === 'Papel'){
                setPuntajeJugador1(puntajeJugador + 1);
                 return 'Ganaste'
             }
            if(fichaMaquina === 'Tijera'){
                setPuntajeMaquina(puntajeMaquina + 1);
                return 'Perdiste'
            }
    
             if(fichaMaquina === 'Spock'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
            }
    
            if(fichaMaquina === 'Piedra'){
                setPuntajeMaquina(puntajeMaquina + 1);
                return 'Perdiste'
            }
         }
        if(name ==='Spock' ){
            if(fichaMaquina === 'Papel'){
                setPuntajeMaquina(puntajeMaquina + 1);
                return 'Perdiste'
            }
            if(fichaMaquina === 'lagarto'){
                setPuntajeMaquina(puntajeMaquina + 1);
                return 'Perdiste'
             }
    
            if(fichaMaquina === 'Tijera'){
                setPuntajeJugador1(puntajeJugador + 1);
                return 'Ganaste'
            }
    
            if(fichaMaquina === 'Piedra'){
                setPuntajeJugador1(puntajeJugador + 1);
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
                           <div className = "Menu">
                           <h1>Elegi para jugar </h1>
                           <br></br>
                           <br></br>
                            <div className = "fichas">
                            
                            <Ficha name = "Piedra" onClick={onClick} />
                            <Ficha name = "Papel" onClick={onClick}/>
                            <Ficha name = "Tijera" onClick={onClick}/>
                            <Ficha name = "lagarto" onClick={onClick}/>
                            <Ficha name = "Spock" onClick={onClick}/>
                            </div>
                            </div>
                        </>
                    ) :(
                        <>
                        
                           

                            <div className = "resultado">
                            <div className = "En-Juego">
                            
                                <h1>-Tu seleccion-</h1>
                                <Ficha name = {tocar} />
                                    
                                 
                                <Ficha name = {fichaMaquina}/>
                                <h1>-Seleccion PC-</h1> 
                                 
                            </div>
                            
                                <h2>{resultado}</h2>
                                <h2>Puntaje Jugador = {puntajeJugador}</h2>
                                 <h2>Puntaje Maquina = {puntajeMaquina}</h2>
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