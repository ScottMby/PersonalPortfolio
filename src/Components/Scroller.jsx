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
                </Marquee>
            </div>
        </>    
    );
}