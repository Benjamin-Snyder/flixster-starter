import React from "react";
import {useState, useEffect} from "react";
import './SeenButton.css'

function SeenButton({onClick}) {
    const[isSeen, setIsSeen] = useState(false);
    const greenSrc = './public/seen-green.png'
    const blackSrc = './public/seen-black.png'

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
