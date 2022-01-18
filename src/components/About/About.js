import "./About.css";
import { Link } from "react-scroll";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-img-container">
                    <img
                        className="about-img"
                        alt="selfie of the author"
                        src={require("../../images/sushant-1.png")}
                    />
                </div>
                <div className="about-text-container">
                    <h1 className="about-heading">
                        Namaste, myself Sushant Waghmare.
                        <br className="about-heading-break" /> I am a aspiring
                        full stack developer.
                    </h1>

                    <div className="about-btn-container">
                        <Link
                            to="contact"
                            smooth={true}
                            delay={100}
                            className="about-work-btn"
                        >
                            Contact Me
                        </Link>

                        <Link
                            to="projects"
                            smooth={true}
                            delay={100}
                            className="about-project-btn"
                        >
                            See My Projects
                        </Link>
                    </div>

                    {/* <ChevronDownIcon className="about-scroll-down-icon" /> */}
                </div>
            </div>
        </section>
    );
}
