import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment"
import "./CommentList.scss"
import {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

const CommentList = ({currentVideo, videoID}) => {

    // seperate it later
    const URL = "https://project-2-api.herokuapp.com/videos";
    const KEY = "cf3d9906-0cb7-43ff-9c44-fea0189bb421";
    const showFullURL = `${URL}/${videoID}?api_key=${KEY}`;

    const navigate = useNavigate();
    const [currentComments, setComments] = useState(null);


    useEffect(() => {
        axios.get(showFullURL).then((res) => {
            const commentData = res.data;
            setComments(commentData);
        }).catch(error => {
            console.log(error);
            navigate('/');
        })
    }, [videoID])

    if (currentComments === null) {
        return (
            <div className="loading__container">
                <h2 className="loading"></h2>
            </div>

        )
    }

    //https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=cf3d9906-0cb7-43ff-9c44-fea0189bb421


    return (
        <>
            <CommentForm currentVideo={currentComments}/> 
            {
            currentComments.comments.map((video) => {
                return <Comment key={
                        video.id
                    }
                    name={
                        video.name
                    }
                    comment={
                        video.comment
                    }
                    likes={
                        video.likes
                    }
                    timestamp={
                        video.timestamp
                    }/>

            })
        } </>

    );
}

export default CommentList;
