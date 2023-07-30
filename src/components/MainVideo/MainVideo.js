import "./MainVideo.scss"

const MainVideo = ( {currentVideo}) => {

    return (
        <section className="video">
            <div className="video__background">
                <video controls className="video__image"
                    poster={
                        currentVideo.image
                }></video>
            </div>
        </section>
    );
}

export default MainVideo;
