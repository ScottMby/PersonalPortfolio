import Logo from '../assets/Logo.svg'
import HomeIcon from '../assets/Home Icon.svg'
import './NavBar.css'
function NavBar() {
    return (
        <>
            <div className="NavContainer">
                <div className="LogoContainer">
                    <img src={Logo} />
                    <text>Scott Mumby</text>
                </div>
                <div className="NavButtonsContainer">
                    <div className="NavButtons">
                        <div className="HomeContainer">
                            <img src={HomeIcon} />
                        </div>
                        <a>About</a>
                        <a>Projects</a>
                        <a type="button" className="ContactMeText">Contact me</a>
                    </div>
                </div>
                <div className="HireMeContainer">
                    <button className="HireMeContainerButton"><text>Hire me</text></button>
                </div>
            </div>
        </>
    );
}

export default NavBar;