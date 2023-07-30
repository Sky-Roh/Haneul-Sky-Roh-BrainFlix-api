import "./Header.scss"
import murugePhoto from "../../assets/images/Mohan-muruge.jpg"

import brainFlixLogo from "../..//assets/logo/BrainFlix-logo.svg";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__logo">
                    <a href="/">
                        <img className="nav__logo--img"
                            src={brainFlixLogo}
                            alt="logo"/>
                    </a>
                </div>

                <div className="nav__menu">
                    <form className="nav__form">
                        <div className="nav__search-container">
                            <input className="nav__search-box" id="search" name="search" type="search" placeholder="Search"/>
                            <img className="nav__image"
                                src={murugePhoto}
                                alt="muruge icon"/>
                        </div>
                        <button className="nav__upload" type="submit">UPLOAD</button>
                    </form>
                </div>


            </nav>
        </header>
    );
}

export default Header;
