import "./Project.css";
function Project({ project }) {
    return (
        <div className="project">
            <div className="project-info">
                <h3>{project.title}</h3>
                <ul className="project-links">
                    <li>
                        <img src={require("../../../images/web.png")} alt="" />
                        <a href={project.demo}>Website</a>
                    </li>
                    <li>
                        <img
                            src={require("../../../images/github-1.png")}
                            alt=""
                        />
                        <a href={project.github}>Github</a>
                    </li>
                </ul>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map((tag, index) => {
                        return (
                            <div key={`item-${index}`} className="project-tag">
                                {tag}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="project-img">
                <img src={project.image} alt="project illustration" />
            </div>
        </div>
    );
}

export default Project;
