
import React from 'react';
import './MoreButton.css';

function MoreButton({ onClick }) {
    return (
        <button className="loadMore"onClick={onClick}>Load More</button>
    );
}

export default MoreButton;
