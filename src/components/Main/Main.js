import {useState} from "react";
import axios from "axios";
import "./Main.scss"
import MainVideo from "../MainVideo/MainVideo"
import MainVideoDetail from "../MainVideoDetail/MainVideoDetail"
import CommentList from "../CommentList/CommentList"
import VideoList from "../VideoList/VideoList"
// will be changed to axios
import videoData from "../../data/videos.json"
import videoDetailData from "../../data/video-details.json"

const URL = "https://project-2-api.herokuapp.com/videos";
const KEY = "cf3d9906-0cb7-43ff-9c44-fea0189bb421";
const showFullURL = `${URL}?api_key=${KEY}`;

axios.get(showFullURL).then((res) => {
    console.log(res.data)
}).catch(error => {
    console.log(error);
})

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
