import {useState} from "react";
import './SeenButton.css'
import blackSeen from './assets/seen-black.png'
import greenSeen from './assets/seen-green.png'

const SeenButton = ({onClick}) => {
    const[isSeen, setIsSeen] = useState(false);
    const greenSrc = greenSeen;
    const blackSrc = blackSeen;

    const tog = (event)=> {
        event.stopPropagation(); // stop click event from opening the modal
        setIsSeen(!isSeen) // toggle seen state
        onClick();
    };

    return(
        <img className="seen-button" onClick={tog} src={isSeen ? greenSrc : blackSrc} alt="Seen Button"/>
    )
}


export default SeenButton;
