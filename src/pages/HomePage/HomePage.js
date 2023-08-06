import {useState, useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom'
import axios from "axios";
import "./HomePage.scss"
import MainVideo from "../../components/MainVideo/MainVideo"
import MainVideoDetail from "../../components/MainVideoDetail/MainVideoDetail"
import CommentList from "../../components/CommentList/CommentList"
import VideoList from "../../components/VideoList/VideoList"



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
    }, [id])

    if (video === null) {
        return <h3>...</h3>
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

