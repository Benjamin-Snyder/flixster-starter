import {useState} from "react";
import './SeenButton.css'
import unselectedSeen from './assets/closed-eye.png'
import selectedSeen from './assets/open-eye.png'

const SeenButton = ({onClick}) => {
    const[isSeen, setIsSeen] = useState(false);
    const selectedSeenSrc = selectedSeen;
    const unselectedSeenSrc = unselectedSeen;

    const tog = (event)=> {
        event.stopPropagation(); // stop click event from opening the modal
        setIsSeen(!isSeen) // toggle seen state
        onClick();
    };

    return(
        <img className="seen-button" onClick={tog} src={isSeen ? selectedSeenSrc : unselectedSeenSrc} alt="Seen Button"/>
    )
}


export default SeenButton;
