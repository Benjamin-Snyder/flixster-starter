import './MoreButton.css';

const MoreButton = ({ handleMoreClick }) => {
    return (
        <button className="loadMore" onClick={handleMoreClick}>Load More</button>
    );
}

export default MoreButton;
