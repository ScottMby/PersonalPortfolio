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
                        <text>About</text>
                        <text>Projects</text>
                        <text type="button" className="ContactMeText">Contact me</text>
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