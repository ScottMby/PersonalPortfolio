import './ProjectsContent.css'

export default function ProjectsContent() {

    return (
        <>
            <div id="projectscontainer" className="ProjectsContainer">
                <div className="ProjectsTitleContainer">
                    <p>Some Featured Projects</p>
                    <img src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@latest/ExperienceStar.svg" />
                </div>
                <div className="ProjectLeft">
                    <div className="ProjectInner">
                        <img src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@latest/ProjectCircle1.png" />
                        <span className="ProjectTitle">Fintech Support Application</span>
                        <p>A support suite where I was personally responsible for backend architecture and technology.
                            The support application used a React + Dotnet stack utilizing real time communication, integration with the clients existing application and an AI chatbot.
                            This project aimed to reduce our clients costs with providing support to their customers while deploying a business intelligence solution to help improve their new cutting edge service.</p>
                    </div>
                </div>
                <div className="ProjectRight">
                    <div className="ProjectInner">
                        <img src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@latest/ProjectCircle2.png" />
                        <span className="ProjectTitle">AI Battlefield Commander</span>
                        <p>Built within ARMA 3, this AI Military Commander focused on creating a believable battlefield commander for players to battle.
                            Inputs from the environment were gathered and processed in ways to create imprecise data that were fed into a non-deterministic AI allowing for unpredictable and human-like orders to be issued to commanded squads.
                            This project was created for my honours dissertation and is available on request.</p>
                    </div>
                </div>
                <div className="ProjectLeft">
                    <div className="ProjectInner">
                        <img src="https://cdn.jsdelivr.net/gh/ScottMby/websiteCDN@latest/ProjectCircle3.png" />
                        <span className="ProjectTitle">ASP.NET Blogging Platform</span>
                        <p>A blog-sharing platform built with Blazor Webassembly and hosted on ASP.NET Core.
                            Blogr uses Entity Framework, ASP.Net Identity and SignalR.
                            Users can create profiles, blogs are displayed as PDFs, and the application has live view count updates.</p>
                    </div>
                </div>
            </div>
        </>
    );
}