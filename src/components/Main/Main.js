import {useState} from "react";
import "./Main.scss"
import MainVideo from "../MainVideo/MainVideo"
import MainVideoDetail from "../MainVideoDetail/MainVideoDetail"
import CommentList from "../CommentList/CommentList"
import VideoList from "../VideoList/VideoList"
import videoData from "../../data/videos.json"
import videoDetailData from "../../data/video-details.json"

const Main = () => {
    const initialData = videoDetailData[0];
    const [currentVideo, setVideos] = useState(initialData);

    // Get all the data except current data
    const updatedVideoList = videoData.filter(video => {
        return video.id !== currentVideo.id;
    })

    // Update current data
    const updateCurrentData = (videoID) => {
        const currentData = videoDetailData.find(video => {
            return videoID === video.id
        })
        setVideos(currentData);
    }

    return (
        <main className="main">
            <MainVideo currentVideo ={currentVideo}/>
            <div className="main__container">
                <div className="main__desktop">
                <MainVideoDetail currentVideo ={currentVideo}/>
                <CommentList currentComment={
                        currentVideo.comments
                    }
                    currentVideo
                    ={currentVideo}/>
                </div>
                <VideoList videoList={updatedVideoList}
                    updateCurrentVideo={updateCurrentData}/>
            </div>
        </main>
    );
}

export default Main;
