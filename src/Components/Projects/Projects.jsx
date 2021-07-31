import "./Projects.scss"
import store from "../../Assets/Images/store2.gif"
import angularSPA from "../../Assets/Images/angularspa.png"
import DotNetCrud from "../../Assets/Images/CRUDgif.gif"
import BANKgif from "../../Assets/Images/BANKgif.gif"
import Netflix from "../../Assets/Images/Netflix.png"
import Instagram from "../../Assets/Images/Instagram.png"
import Portfolio from "../../Assets/Images/Portfolio.png"

export default function Projects({activeProject, setActiveProject}) {
  
    const tags = [
        "Angular",
        ".Net",
         "React",
        "Spring",
    ]

    const projectList = [
    {
        title:  "SerieCrud",
        tags: [tags[1]] ,
        img: DotNetCrud ,
        github: "https://github.com/MarcusMiguel/SerieCRUD-DotNetCoreMVC"
    },
    { 
        title:  "SpringAPI",
        tags: [tags[3]] ,
        img: store ,
        github: "https://github.com/MarcusMiguel/SpringAPI"
    },
    { 
        title:  "BankAccountSystem",
        tags: [tags[1]]  ,
        img: BANKgif ,
        github: "https://github.com/MarcusMiguel/.Net-Core-BankAccountSystem"
    },
    {
        title:  "AngularSPA",
        tags: [tags[0]],
        img: angularSPA,
        github: "https://github.com/MarcusMiguel/AngularSPA"
    },
    { 
        title:  "Netflix Clone",
        tags: []  ,
        img: Netflix ,
        github: "https://github.com/MarcusMiguel/NetflixClone"
    },
    { 
        title:  "Instagram Initial Page",
        tags: []  ,
        img: Instagram ,
        github: "https://github.com/MarcusMiguel/InstagramInitialPage"
    },
    { 
        title:  "Portfólio",
        tags: [2]  ,
        img: Portfolio ,
        github: "https://github.com/MarcusMiguel/Projects"
    }]

    const handleClick = (s) => {
        if (activeProject !== s) setActiveProject(s)
        else setActiveProject("All")
    }

    return (
        <div className="projects" id="projects">
            <div className="card">
                <h1>Projetos</h1>
                <ul>
                     <li className={(activeProject==="Angular" && " active")} onClick={() => handleClick("Angular")}>
                        Angular
                    </li>
                    <li className={(activeProject==="React" && " active")} onClick={() =>  handleClick("React")}>
                        React
                    </li>
                    <li className={(activeProject===".Net" && " active")} onClick={() =>  handleClick(".Net")}>
                        .Net
                    </li>
                    <li className={(activeProject==="Spring" && " active")} onClick={() =>  handleClick("Spring")}>
                        Spring
                    </li> 
                </ul>
                <div className="projects-container">
                {projectList.map(project => {
                    return (activeProject === "All" || project.tags.includes(activeProject))?
                    <div className="project" >
                        <a href={project.github} target="_blank" rel="noopener noreferrer" >
                            <img src={[project.img]} alt="NO IMG"/>
                            <h3>{project.title}</h3>
                            </a>
                    </div> : null})
                }
                </div>
            </div>
        </div>
    )
}
