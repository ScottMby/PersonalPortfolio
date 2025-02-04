import './Scroller.css'
import ScrollerIcon from '../assets/ScrollerIcon.svg'
import Marquee from 'react-fast-marquee'

export default function Scroller () {

    return (
        <>
            <div className="MarqueeContainer">
                <Marquee direction="left" className="Marquee">
                    <img src={ScrollerIcon} />
                    <p>.NET</p>
                    <img src={ScrollerIcon} />
                    <p>C#</p>
                    <img src={ScrollerIcon} />
                    <p>Blazor</p>
                    <img src={ScrollerIcon} />
                    <p>SQL</p>
                    <img src={ScrollerIcon} />
                    <p>React</p>
                    <img src={ScrollerIcon} />
                    <p>Azure DevOps</p>
                    <img src={ScrollerIcon} />
                    <p>Docker</p>
                    <img src={ScrollerIcon} />
                    <p>Git</p>
                    <img src={ScrollerIcon} />
                    <p>HTML</p>
                    <img src={ScrollerIcon} />
                    <p>CSS</p>
                    <img src={ScrollerIcon} />
                    <p>Entity Framework</p>
                    <img src={ScrollerIcon} />
                    <p>Figma</p>
                    <img src={ScrollerIcon} />
                    <p>PostgreSQL</p>
                    <img src={ScrollerIcon} />
                    <p>JavaScript</p>
                    <img src={ScrollerIcon} />
                    <p>Unity</p>
                </Marquee>
            </div>
        </>    
    );
}