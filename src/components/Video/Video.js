import "./Video.scss"
import {Link} from 'react-router-dom'

const Video = ({
    id,
    image,
    title,
    channel,
    updateVideo
}) => {


    return (
        <Link className="link" to={"/videos/"+id}>
            <section className="next-video">
                <div className="next-video__list">
                    <div className="next-video__image">
                        {/* Here */}
                        <img className="next-video--image"
                            src={image}
                            alt="will be change"/>

                    </div>
                    <div className="next-video__text">
                        {/* Here */}

                        <h2 className="next-video__subtitle">
                            {title}</h2>
                        <h3 className="next-video__channel">
                            {channel}</h3>
                    </div>
                </div>
            </section>
        </Link>
    );
}

export default Video;
