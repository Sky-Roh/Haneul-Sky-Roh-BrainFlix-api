import {useState, useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom'
import axios from "axios";
import "./Main.scss"
import MainVideo from "../MainVideo/MainVideo"
import MainVideoDetail from "../MainVideoDetail/MainVideoDetail"
import CommentList from "../CommentList/CommentList"
import VideoList from "../VideoList/VideoList"
// // will be changed to axios
// import videoData from "../../data/videos.json"
// import videoDetailData from "../../data/video-details.json"


const Main = () => {
    const URL = "https://project-2-api.herokuapp.com/videos";
    const KEY = "cf3d9906-0cb7-43ff-9c44-fea0189bb421";
    const showFullURL = `${URL}?api_key=${KEY}`;

    const {id} = useParams();

    const navigate = useNavigate();

    const [video, setVideo] = useState(null);


    useEffect(() => {
        axios.get(showFullURL).then((res) => {
            const videoData = res.data;
            setVideo(videoData);
        }).catch(error => {
            console.log(error);
            navigate('/');
        })
    }, [])

    if (video === null) {
        return <h1>Loading ...</h1>
    }
    const videoID = id || video[0].id;

    return (
        <main className="main">
            <MainVideo currentVideo={video}
                videoID={videoID}/>
            <div className="main__container">
                <div className="main__desktop">
                    <MainVideoDetail currentVideo ={video}
                        videoID={videoID}/>
                    <CommentList currentVideo ={video}
                        videoID={videoID}/>
                </div>
                <VideoList currentVideo={video}
                    videoID={videoID}/>
            </div>
        </main>
    );
}

export default Main;

/*
    // Get all the data except current data
    // const updatedVideoList = videoData.filter(video => {
    //     return video.id !== currentVideo.id;
    // })
    const updatedVideoList = videos && currentVideo ? videos.filter((video) => video.id !== currentVideo.id) : [];
    // // Update current data
    // const updateCurrentData = (videoID) => {
    //     const currentData = videoDetailData.find(video => {
    //         return videoID === video.id
    //     })
    //     setVideo(currentData);
    // }

    const updateCurrentData = (videoID) => {
        // Check if videos state is available and not null
        if (videos && videos.length > 0) {
          const currentData = videos.find((video) => videoID === video.id);
          if (currentData) {
            setVideo(currentData);
          }
        }
      };
      */
