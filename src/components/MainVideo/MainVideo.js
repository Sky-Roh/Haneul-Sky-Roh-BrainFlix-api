import "./MainVideo.scss"

const MainVideo = ({currentVideo, videoID}) => {

    const current = currentVideo.find(video => {
        return videoID === video.id;
    })

    // if(currentVideo === null) {
    //     <h1>Loading...</h1>
    // }

    return (
        
        <section className="video">
            <div className="video__background">
                <video controls className="video__image"
                    poster={
                        current.image
                }></video>
            </div>
        </section>
    );
}

export default MainVideo;
