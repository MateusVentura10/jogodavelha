import React from "react";
import './Play.css';

const Row = props => {
    const GameControl = props.game;
    const player = props.player;
    const inputStyle = props.style;

    return (
        <tr>
            <td><input style={inputStyle} className="input" type="text" maxLength="1" onChange={input => GameControl.inputFilter(input.target, player)}></input></td>
            <td><input style={inputStyle} className="input" type="text" maxLength="1" onChange={input => GameControl.inputFilter(input.target, player)}></input></td>
            <td><input style={inputStyle} className="input" type="text" maxLength="1" onChange={input => GameControl.inputFilter(input.target, player)}></input></td>
        </tr>
    )
}

export default Row;