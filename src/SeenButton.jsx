import React from "react";
import {useState, useEffect} from "react";
import './SeenButton.css'

function SeenButton({onClick}) {
    const[isSeen, setIsSeen] = useState(false);
    const greenSrc = './src/assets/seen-green.png'
    const blackSrc = './src/assets/seen-black.png'

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
