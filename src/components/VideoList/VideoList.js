import "./VideoList.scss"
import "../Video/Video.scss"
import Video from "../Video/Video"

const VideoList = ({updateCurrentVideo, videoList}) => {
    return (
        <section className="video-list">
            <div className="video-list__container">
                <h2 className="video-list__subtitle">NEXT VIDEOS</h2>

                {
                videoList.map((video) => (
                    <Video key={
                            video.id
                        }
                        id={
                            video.id
                        }
                        title={
                            video.title
                        }
                        channel={
                            video.channel
                        }
                        image={
                            video.image
                        }
                        updateVideo={updateCurrentVideo}/>
                ))
            } </div>

        </section>
    );
}

export default VideoList;
