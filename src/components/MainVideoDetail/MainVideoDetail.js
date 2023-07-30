import "./MainVideoDetail.scss"
import viewIcon from "../../assets/icons/views.svg"
import likeIcon from "../../assets/icons/likes.svg"
import convertDateFormat from "../helpers/helpers.js"

const MainVideoDetail = ({currentVideo}) => {
    const timeStamp = currentVideo.timestamp;
    return (
        <div className="video__detail">
            <h2 className="video__title">
                {
                currentVideo.title
            }</h2>
            <div className="video__info">
                <div className="video__channelAndDate">
                    <p className="video__channel">By {
                        currentVideo.channel
                    }</p>
                    <p className="video__timestamp">
                        {
                        convertDateFormat(timeStamp)
                    }</p>
                </div>
                <div className="video__menu">
                    <div className="video__view">
                        <img className="video__like--img"
                            src={viewIcon}
                            alt="eye icon"/>
                        <p className="video__view--number">
                            {
                            currentVideo.views
                        }</p>
                    </div>
                    <div className="video__like">
                        <img className="video__like--img"
                            src={likeIcon}
                            alt="heart icon"/>
                        <p className="video__like--number">
                            {
                            currentVideo.likes
                        }</p>
                    </div>
                </div>
            </div>

            <p className="video__description">
                {
                currentVideo.description
            }</p>
        </div>


    );
}

export default MainVideoDetail;
