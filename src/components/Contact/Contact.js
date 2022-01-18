import "./Contact.css";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-info-first-column">
                        <h2 className="contact-info-social-media-detail">
                            SOCIAL MEDIA
                        </h2>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/sushant-waghmare/">
                                    <img
                                        src={require("../../images/linkedin.png")}
                                        alt="linkedin website icon"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/sushant-78">
                                    <img
                                        src={require("../../images/github.png")}
                                        alt="github website icon"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-info-second-column">
                        <h2 className="contact-info-email-header">EMAIL</h2>
                        <a
                            href="mailto:sushantw78@gmail.com"
                            className="contact-info-email-detail"
                        >
                            sushantw78@gmail.com
                        </a>
                    </div>
                </div>

                <form
                    netlify="true"
                    name="contact"
                    className="form"
                    onSubmit={handleSubmit}
                >
                    <h2 className="form-header">Contact Me</h2>

                    <div className="form-name">
                        <label htmlFor="name" className="form-name-label">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-name-input"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-email">
                        <label htmlFor="email" className="form-email-label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-email-input"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-message">
                        <label htmlFor="message" className="form-message-label">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-message-input"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="form-submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
