import React from 'react';
import './Sidebar.css';

const SideBar = ({ onSelectPage }) => {
    return (
        <div className="sidebar">
            <button onClick={() => onSelectPage('Home')}>Home</button>
            <button onClick={() => onSelectPage('Favorites')}>Favorites</button>
            <button onClick={() => onSelectPage('Watched')}>Watched</button>
        </div>
    );
};

export default SideBar;
