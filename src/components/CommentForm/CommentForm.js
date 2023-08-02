import axios from "axios";
import "./CommentForm.scss"
import murugePhoto from "../../assets/images/Mohan-muruge.jpg"

const CommentForm = ({currentVideo}) => {

    // axios.post().then().catch()
    // POST /videos/:id/comments -> axios
    // /videos/:videoId/comments/:commentId

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

                <form className="comment-conversation__form">
                    <label className="comment-conversation__label">JOIN THE CONVERSATION
                        <textarea className="comment-conversation__input comment-conversation__input--textarea" type="text" rows="4" cols="10" id="comment" name="comment" spellCheck="true" placeholder="Add a new comment"></textarea>
                    </label>
                    <div className="comment-conversation__button">
                        <button className="comment-conversation__comment-button">
                            COMMENT
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CommentForm;
