import "./Navbar.css";
import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";

export default function Navbar() {
    const [scroll, setScroll] = useState(false);
    const handleScroll = () => {
        if (window.screen.availWidth < 500 && window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    window.addEventListener("scroll", handleScroll);
    return (
        <header className="header">
            <div className="header-container">
                <div className={scroll ? "header-logo-none" : "header-logo"}>
                    <Link
                        to="about"
                        smooth={true}
                        delay={100}
                        offset={-200}
                        className="header-logo-link"
                    >
                        Portfolio.
                    </Link>
                </div>
                <nav className="header-nav">
                    {scroll && (
                        <Link
                            to="about"
                            smooth={true}
                            offset={-200}
                            delay={100}
                            className="header-nav-item"
                        >
                            Home
                        </Link>
                    )}
                    <Link
                        to="project"
                        smooth={true}
                        offset={-200}
                        delay={100}
                        className="header-nav-item"
                    >
                        Projects
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        offset={-200}
                        delay={100}
                        className="header-nav-item"
                    >
                        Skills
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        offset={-200}
                        delay={100}
                        className="header-nav-btn-link"
                    >
                        Contact me{" "}
                        <ArrowRightIcon className="header-nav-btn-link-icon" />
                    </Link>
                </nav>
            </div>
        </header>
    );
}
