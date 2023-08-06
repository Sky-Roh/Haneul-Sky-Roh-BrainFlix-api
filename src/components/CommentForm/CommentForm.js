// import axios from "axios";
import { useState } from "react";
import "./CommentForm.scss"
import murugePhoto from "../../assets/images/Mohan-muruge.jpg"

const CommentForm = ({currentVideo}) => {
    const [comment, setComment] = useState("");

    const handleChangeComment = (event) => {
        setComment(event.target.value);
    }

    const isValid = () => {
        if (!comment) {
            return false;
        } else {
            return true;
        }
    }


    const handleSubmit= (event) => {
        event.preventDefault();

        if(isValid()) {
            console.log(event.target.comment.value);
            alert("COMMENT IS ADDED");
            event.target.reset()
        }
    }

    // axios.post().then().catch()
    // POST /videos/:id/comments -> axios
    // /videos/:videoId/comments/:commentId

    // console.log(currentVideo.comments);

    return (
        <section className="comment-conversation">
            <h2 className="comment-conversation__header">
                {
                currentVideo.comments.length
            }
                {
                ` Comment${
                    currentVideo.comments.length > 1 && 's'
                }`
            }</h2>
            <div className="comment-conversation__container">
                <img className="comment-conversation__image"
                    src={murugePhoto}
                    alt="Mohan Muruge"/>

                <form className="comment-conversation__form" onSubmit={handleSubmit}>
                    <label className="comment-conversation__label">JOIN THE CONVERSATION
                        <textarea className="comment-conversation__input comment-conversation__input--textarea" type="text" id="comment" name="comment" spellCheck="true" placeholder="Add a new comment"
                            onChange={handleChangeComment}></textarea>
                    </label>
                    <div className="comment-conversation__button">
                        <button className="comment-conversation__comment-button" type="submit" disabled={!isValid}>
                            COMMENT
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CommentForm;
