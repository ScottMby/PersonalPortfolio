import ExperienceStar from '../assets/ExperienceStar.svg'
import Circle1 from '../assets/Circle 1.svg'
import Circle2 from '../assets/Circle 2.svg'
import ElipseR from '../assets/Elipse-R.svg'
import ElipseD from '../assets/Elipse-D.svg'
import Line from '../assets/line.svg'
import './ExperienceContent.css'

export default function ExperienceContent(props)
{

    return (
        <>
            <div ref={props.innerRef} className="ExperienceContainer">
                <div className="ExperienceTitleContainer">
                    <p>My Previous Experience</p>
                    <img src={ExperienceStar} />
                </div>
                <div className="InnerExperienceContainer">
                    <div className="JobContainer">
                        <div className="NumberContainer">
                            <img src={Circle1} />
                        </div>
                        <div className="JobContent">
                            <img src={ElipseR} />
                            <div className="JobTextContainer">
                                <p>Web Developer Intern - Tick9 Ltd</p>
                                <ul>
                                    <li>Developed a web-based business growth tool using the ASP.NET and Blazor. The application integrated Xero to maximise users efficiency.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <img src={Line} className="LineImage" />
                    <div className="JobContainer">
                        <div className="NumberContainer">
                            <img src={Circle2} />
                        </div>
                        <div className="JobContent">
                            <img src={ElipseD} />
                            <div className="JobTextContainer">
                                <p>CDP Software Engineer - University of Hull</p>
                                <ul>
                                    <li>Worked with a client from start to finish to deliver a support portal for a new Fin Tech startup. Used React and ASP.NET to deliver an app using real-time communication and an AI chatbot to minimize costs while providing excellent customer service.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}