import React from "react";
import {Link} from 'react-router-dom';
import './Start.css';

const Start = () => {
    return (
        <div class="start--area">
            <img class="start--img" src="https://i.pinimg.com/originals/b4/dd/1b/b4dd1bb35f98d46dcac06ba2e0693efc.png"></img>
            <div class="start--text">
                <h1>Jogo da Velha</h1>
                <p>Jogue o jogo da velha, um dos jogos mais famosos do mundo.</p>
                <Link to="/jogodavelha/jogar/">Jogar</Link>
            </div>
        </div>
    )
}

export default Start;