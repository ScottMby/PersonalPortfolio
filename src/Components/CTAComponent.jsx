import './CTAComponent.css'
import ExperienceStar from '../assets/ExperienceStar.svg'
import CTAImg from '../assets/CTAImg.svg'

export default function CTAComponent(props) {

    return (
        <>
            <div className="CTAContainer" ref={props.innerRef}>
                <div className="CTA">
                    <div className="CTAContent">
                        <div className="CTATitle">
                            <p>Have a project idea?</p>
                            <img src={ ExperienceStar } />
                        </div>
                        <button className="HireMeButton" onClick={() => window.location.href = 'mailto:smumby2003@gmail.com'}><text>Lets Talk!</text></button>
                    </div>
                    <img src={CTAImg} />
                </div>
            </div>
        </>
    );
}