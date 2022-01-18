import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function App() {
    return (
        <main>
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
}
