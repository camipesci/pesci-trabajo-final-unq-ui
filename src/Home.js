import {Link} from "react-router-dom";

function Home(){

    return(
        <div className="Juego">
        <div className="juego-container">
          <div className="menu-principal container">

              <div className="row">
                
                <div> Piedra, Papel, Tijera, Lagarto, Spock </div>
              </div>
              <div className="row">
                  <div className="un-jugador">
                      <Link className="btn-small black" to="/jugador1">1 Jugador</Link>
                  </div>

                  <div className="dos-jugadores">
                      <Link className="btn-small black" to="/jugador2">2 Jugadores</Link>
                  </div>
                  
                  <div className="reglas">
                      <Link className="btn-small black" to="/reglas">Reglas</Link>
                  </div>
                  
          </div>
        </div>
        </div>
        
      </div>
    )



}

export default Home;