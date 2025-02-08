import './ExperienceContent.css'
export default function ExperienceContent()
{

    return (
        <>
            <div id="experiencecontainer" className="ExperienceContainer">
                <div className="ExperienceTitleContainer">
                    <p>My Previous Experience</p>
                    <img src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@latest/ExperienceStar.svg" />
                </div>
                <div className="InnerExperienceContainer">
                    <div className="JobContainer">
                        <div className="NumberContainer">
                            <img src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@latest/Circle 1.svg" />
                        </div>
                        <div className="JobContent">
                            <img src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@latest/Elipse-R.svg" />
                            <div className="JobTextContainer">
                                <p>Web Developer Intern - Tick9 Ltd</p>
                                <ul>
                                    <li>Developed a web-based business growth tool using the ASP.NET and Blazor. The application integrated Xero to maximise users efficiency.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <img src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@latest/Line.svg" className="LineImage" />
                    <div className="JobContainer">
                        <div className="NumberContainer">
                            <img src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@latest/Circle 2.svg" />
                        </div>
                        <div className="JobContent">
                            <img src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@latest/Elipse-D.svg" />
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