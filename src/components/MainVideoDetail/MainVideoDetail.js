import "./MainVideoDetail.scss"
import viewIcon from "../../assets/icons/views.svg"
import likeIcon from "../../assets/icons/likes.svg"
import convertDateFormat from "../helpers/helpers.js"
import {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

const MainVideoDetail = ({currentVideo, videoID}) => { // seperate it later
    const URL = "https://project-2-api.herokuapp.com/videos";
    const KEY = "cf3d9906-0cb7-43ff-9c44-fea0189bb421";
    const showFullURL = `${URL}/${videoID}?api_key=${KEY}`;
    // const showFullURL = `https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=cf3d9906-0cb7-43ff-9c44-fea0189bb421`
    const navigate = useNavigate();
    const [videoDetail, setvideoDetail] = useState(null);

    useEffect(() => {
        axios.get(showFullURL).then((res) => {
            const commentData = res.data;
            setvideoDetail(commentData);

        }).catch(error => {
            console.log(error);
            navigate('/');
        })
    }, [])


    if (videoDetail === null) {
        return (
            <div className="loading__container">
                <h2 className="loading"></h2>
            </div>
        )
    }

    return (
        <div className="video__detail">
            <h2 className="video__title">
                {
                videoDetail.title
            }</h2>
            <div className="video__info">
                <div className="video__channelAndDate">
                    <p className="video__channel">By {
                        videoDetail.channel
                    }</p>
                    <p className="video__timestamp">
                        {
                        convertDateFormat(videoDetail.timestamp)
                    }</p>
                </div>
                <div className="video__menu">
                    <div className="video__view">
                        <img className="video__like--img"
                            src={viewIcon}
                            alt="eye icon"/>
                        <p className="video__view--number">
                            {
                            videoDetail.views
                        }</p>
                    </div>
                    <div className="video__like">
                        <img className="video__like--img"
                            src={likeIcon}
                            alt="heart icon"/>
                        <p className="video__like--number">
                            {
                            videoDetail.likes
                        }</p>
                    </div>
                </div>
            </div>

            <p className="video__description">
                {
                videoDetail.description
            }</p>
        </div>


    );
}

export default MainVideoDetail;
