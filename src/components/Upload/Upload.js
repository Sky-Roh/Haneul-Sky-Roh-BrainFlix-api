import "./Upload.scss"
import {Link} from 'react-router-dom'
import thumbnail from "../../assets/images/Upload-video-preview.jpg"


const Upload = () => {
    return (
        <section className='upload'>
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__desktop">
                <div className="upload__thumbnail-container">
                    <p className="upload__thumbnail">VIDEO THUMBNAIL</p>

                    <img className="upload__image"
                        src={thumbnail}
                        alt="video thumbnail"/>
                </div>
                <form className="upload-form">
                    <label className="upload-form__title-label" htmlFor='title'>TITLE YOUR VIDEO
                        <input className="upload-form__title-input" type='text' name='title' id='title' placeholder="Add a title to your video"/>
                    </label>
                    <label className="upload-form__desc-label" htmlFor='description'>ADD A VIDEO DESCRIPTION
                        <textarea className="upload-form__desc-input" type='text' name='description' id='description' placeholder="Add a description to your video"></textarea>
                    </label>
                </form>
            </div>

            <div className="upload-form__button-container">
                <div className="upload-form__button">
                    <button className="upload-form__publish-btn">PUBLISH</button>
                    <Link className="upload-form__cancel-btn--link" to="/">
                        <button className="upload-form__cancel-btn">CANCEL</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Upload;
