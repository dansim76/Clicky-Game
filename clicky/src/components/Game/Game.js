import React from "react";
import "./Game.css";

const Game = props => (
<div className = "card" value = {props.id} onClick={() => props.handleClicked(props.id)}>
    <div className="img-container">
        <img alt={props.name} src={props.image} />
    </div>
</div>
);


export default Game;
