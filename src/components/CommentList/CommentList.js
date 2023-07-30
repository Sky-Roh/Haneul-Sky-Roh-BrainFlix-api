import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment"
import "../Comment/Comment.scss"

const CommentList = ({currentComment, currentVideo}) => { 
    return (
        <>
            <CommentForm currentVideo={currentVideo}/> {
            currentComment.map((video) => { 
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
