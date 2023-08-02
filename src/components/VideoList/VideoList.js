import "./VideoList.scss"
import "../Video/Video.scss"
import Video from "../Video/Video"

const VideoList = ({currentVideo, videoID}) => {

    const updatedVideoList = currentVideo.filter(video => {
        return videoID !== video.id;
    })   

    // const updateCurrentData = (videoID) => {
    //     const currentData = videoDetailData.find(video => {
    //         return videoID === video.id
    //     })
    //     setVideos(currentData);
    // }

    return (
        <section className="video-list">
            <div className="video-list__container">
                <h2 className="video-list__subtitle">NEXT VIDEOS</h2>
                {
                updatedVideoList.map((video) => (
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
                        />
                ))
            } </div>

        </section>
    );
}

export default VideoList;
