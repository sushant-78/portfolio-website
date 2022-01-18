import "./Skills.css";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import skills from "../../data/skills";

export default function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <div className="skills-header">
                    <ChipIcon className="skills-header-icon" />
                    <h1 className="skills-heading">
                        Skills &amp; Technologies
                    </h1>
                </div>
                <div className="skills-details">
                    {skills.map((skill, index) => (
                        <div key={`item-${index}`} className="skill-details">
                            <div className="skill-container">
                                <BadgeCheckIcon className="skill-container-icon" />
                                <span className="skill-text">{skill}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
