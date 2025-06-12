import React from "react";
import {useState, useEffect} from "react";
import './SeenButton.css'
import blackSeen from './assets/seen-black.png'
import greenSeen from './assets/seen-green.png'

function SeenButton({onClick}) {
    const[isSeen, setIsSeen] = useState(false);
    const greenSrc = greenSeen;
    const blackSrc = blackSeen;

    const tog = (event)=> {
        event.stopPropagation();
        setIsSeen(!isSeen)
        onClick();
    };

    return(
        <img className="SeenButton" onClick={tog} src={isSeen ? greenSrc : blackSrc} alt="Seen Button"/>
    )
}


export default SeenButton;
