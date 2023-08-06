import "./Header.scss"
import murugePhoto from "../../assets/images/Mohan-muruge.jpg"
import brainFlixLogo from "../..//assets/logo/BrainFlix-logo.svg";
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__logo">
                    <Link to="/">
                        <img className="nav__logo--img"
                            src={brainFlixLogo}
                            alt="logo"/>
                    </Link>
                </div>

                <div className="nav__menu">
                    <form className="nav__form">
                        <div className="nav__search-container">
                            <input className="nav__search-box" id="search" name="search" type="search"  placeholder="Search"/>
                            <img className="nav__image"
                                src={murugePhoto}
                                alt="muruge icon"/>
                        </div>
                        <Link className="nav__upload--link" to="/videos">
                            <button className="nav__upload">UPLOAD</button>
                        </Link>
                    </form>
                </div>


            </nav>
        </header>
    );
}

export default Header;
