import './CTAComponent.css'

export default function CTAComponent() {

    return (
        <>
            <div id="ctacontainer" className="CTAContainer">
                <div className="CTA">
                    <div className="CTAContent">
                        <div className="CTATitle">
                            <p>Have a project idea?</p>
                            <img src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@master/ExperienceStar.svg" />
                        </div>
                        <button className="HireMeButton" onClick={() => window.location.href = 'mailto:smumby2003@gmail.com'}><p>Lets Talk!</p></button>
                    </div>
                    <img src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@master/CTAImg.svg" />
                </div>
            </div>
        </>
    );
}