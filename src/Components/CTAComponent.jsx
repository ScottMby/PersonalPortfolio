import './CTAComponent.css'
import ExperienceStar from '../assets/ExperienceStar.svg'
import CTAImg from '../assets/CTAImg.svg'

export default function CTAComponent(props) {

    return (
        <>
            <div id="ctacontainer" className="CTAContainer">
                <div className="CTA">
                    <div className="CTAContent">
                        <div className="CTATitle">
                            <p>Have a project idea?</p>
                            <img src={ ExperienceStar } />
                        </div>
                        <button className="HireMeButton" onClick={() => window.location.href = 'mailto:smumby2003@gmail.com'}><p>Lets Talk!</p></button>
                    </div>
                    <img src={CTAImg} />
                </div>
            </div>
        </>
    );
}