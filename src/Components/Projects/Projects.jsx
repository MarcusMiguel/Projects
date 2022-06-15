import "./Projects.scss"
import store from "../../Assets/Images/store2.gif"
import angularSPA from "../../Assets/Images/angularspa.png"
import DotNetCrud from "../../Assets/Images/CRUDgif.gif"
import BANKgif from "../../Assets/Images/BANKgif.gif"
import Netflix from "../../Assets/Images/Netflix.png"
import Instagram from "../../Assets/Images/Instagram.png"
import Portfolio from "../../Assets/Images/Portfolio.png"
import Kafka from "../../Assets/Images/Kafka.png"
import ConsultaSystem from "../../Assets/Images/ConsultaSystem.gif"
import TechStore from "../../Assets/Images/techstore.gif" 

export default function Projects({activeProject, setActiveProject}) {
  
    const tags = [
        "Angular",
        ".Net",
         "React",
        "Spring",
        "NodeJs",
    ]

    const projectList = [
    { 
        title:  "TechStore",
        tags: [tags[2], tags[4]]  ,
        img: TechStore ,
        github: "https://github.com/MarcusMiguel/TechStore/"
    },
    { 
        title:  "ConsultaSystem",
        tags: [tags[1]]  ,
        img: ConsultaSystem ,
        github: "https://github.com/MarcusMiguel/ConsultaSystem/tree/after-deadline"
    },
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
        title:  "Kafka-Spring-Demo",
        tags: [tags[3]]  ,
        img: Kafka ,
        github: "https://github.com/MarcusMiguel/Kafka_Spring_Demo"
    },
    {
        title:  "AngularSPA",
        tags: [tags[0]],
        img: angularSPA,
        github: "https://github.com/MarcusMiguel/AngularSPA"
    },
    { 
        title:  "BankAccountSystem",
        tags: [tags[1]]  ,
        img: BANKgif ,
        github: "https://github.com/MarcusMiguel/.Net-Core-BankAccountSystem"
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
        title:  "Portfolio",
        tags: [tags[2]]  ,
        img: Portfolio ,
        github: "https://github.com/MarcusMiguel/Projects"
    },
    ]

    const handleClick = (s) => {
        if (activeProject !== s) setActiveProject(s)
        else setActiveProject("All")
    }

    return (
        <div className="projects" id="projects">
       <div className="project-title">Projects</div>
            <div className="card">
                <ul>
                {tags.map(tag => {
                   return ( <li className={(activeProject===tag && " active")} onClick={() => handleClick(tag)}>
                        {tag}
                    </li>)
                }
                )
                }
                    
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
