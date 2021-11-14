import React from "react";
import Row from "./Row";
import './Play.css';

const Table = props => {
    const GameControl = props.game;
    const player = props.player;
    const inputStyle = props.style;

    return (

        <table className="play--area" border="1">
            <tbody>
               <Row game={GameControl}  player={player} style={inputStyle} />

               <Row game={GameControl}  player={player} style={inputStyle} />

               <Row game={GameControl}  player={player} style={inputStyle} />
            </tbody>
        </table>
    )
}

export default Table;