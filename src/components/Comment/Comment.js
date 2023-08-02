import convertDateFormat from "../helpers/helpers";
import "./Comment.scss"

const Comment = ({name, comment, likes, timestamp}) => {
    return (
        <section className="original-comment">

            <div className="original-comment__container">
                <div className="original-comment__img"></div>
                <div className="original-comment__user-card">
                    <div className="original-comment__head">
                        <h4 className="original-comment__name">{name}</h4>
                        <p className="original-comment__date">{convertDateFormat(timestamp)}</p>
                    </div>
                    <p className="original-comment__CommentText">{comment}</p>
                    <div className="original-comment__img-container"></div>
                </div>
            </div>
        </section>
    );
}

export default Comment;
