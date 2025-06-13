
const YoutubeEmbed = ({ embedId }) => {
    if (!embedId) return null; // Ensure embedId is valid

    return (
        <div className="video-responsive">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
};

export default YoutubeEmbed;
