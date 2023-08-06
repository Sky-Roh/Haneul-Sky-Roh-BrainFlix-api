import "./Upload.scss"
import SignedUp from "../SignedUp/SignedUp";
import {Link, useNavigate} from 'react-router-dom'
import thumbnail from "../../assets/images/Upload-video-preview.jpg"

// reference : https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el#the-solution-refactoring
const Upload = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formEl = event.target;
        const title = formEl.title.value;
        const description = formEl.description.value;


        if (title === '' || description === '') {
            alert("Fill up all field")
            return false;
        } else {
            navigate('/signUp')
        }

    }


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
                <form className="upload-form"
                    onSubmit={handleSubmit}>
                    <label className="upload-form__title-label" htmlFor='title'>TITLE YOUR VIDEO
                        <input className="upload-form__title-input" type='text' name='title' id='title' placeholder="Add a title to your video"/>
                    </label>
                    <label className="upload-form__desc-label" htmlFor='description'>ADD A VIDEO DESCRIPTION
                        <textarea className="upload-form__desc-input" type='text' name='description' id='description' placeholder="Add a description to your video"></textarea>
                    </label>
                    <div className="upload-form__button-container">
                        {/* <div className="upload-form__button"> */}
                        <button type="submit" className="upload-form__publish-btn">PUBLISH</button>
                        <Link className="upload-form__cancel-btn--link" to="/">
                            <button className="upload-form__cancel-btn">CANCEL</button>
                        </Link>
                        {/* </div> */} </div>
                </form>
            </div>
        </section>
    );
};

export default Upload;
