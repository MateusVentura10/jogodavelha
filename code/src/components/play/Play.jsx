import React, {useState} from "react";
import WinnerControl from './Winner';
import Table from './Table';
import './Play.css';
import { useEffect } from "react/cjs/react.development";

const Play = () => {
    const Winner = WinnerControl();
    const [player, setPlayer] = useState(1);
    const [winner, setWinner] = useState(false);
    const [inputStyle, setInputStyle] = useState({
        pointerEvents: 'none',
        opacity: '0.7'
    });

    const GameControl = (() => {
        return {
            start(){
                setInputStyle({
                    pointerEvents: 'auto',
                    opacity: '1'
                })

                document.querySelector('.play--btnRestart-1').style = "pointer-events:none";
                document.querySelector('.play--btnRestart-2').style = "pointer-events:auto";
            },

            restart(){
                setInputStyle({
                    background: 'white',
                    color: 'black'
                })

                document.querySelectorAll('.input').forEach(input => {
                    input.value = "";
                    input.style = "";
                    input.removeAttribute('readonly');
                });

                document.querySelector('.winner').innerHTML = "";
                document.querySelector('.winner').style = "opacity: 0";

                setPlayer(1);
            },

            inputFilter(input, player){
                if(player % 2 !== 0){
                    if(input.value !== 'X' && input.value !== 'x') return input.value = "";
                    input.style = "background: #f47373; color: white";
                    input.setAttribute('readonly', true);

                } else {
                    if(input.value !== 'O' && input.value !== 'o') return input.value = "";
                    input.style = "background: #64b5f6; color: white";
                    input.setAttribute('readonly', true);
                }

                if(player >=5) Winner.verify(player);
                setPlayer(player += 1);
            }

        }
    })();

    return (

        <div className="play">
            <h1 className="play--title">Jogo da Velha</h1>

            <div class="winner"></div>

            <div>
                <div className="play--player">
                    <span className="player--1">Jogador 1 - <strong>X</strong></span>
                    <span className="player--2">Jogador 2 - <strong>O</strong></span>
                    <button className="play--btnRestart-1" type="button" onClick={() => GameControl.start()}>Jogar</button>
                    <button className="play--btnRestart-2" type="button" onClick={() => GameControl.restart()}>Reiniciar</button>
                </div>

               <Table game={GameControl}  player={player} style={inputStyle} />
            </div>
        </div>
    )
}

export default Play;