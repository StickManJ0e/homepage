import React from "react";
import "../styles/Footer.css";
import profile from '../assets/pexels-lisa-fotios-2935956.jpg'

const Footer = () => {
    return (
        <footer>
            <div className="body">
                <h2>Contact Me</h2>
                <p>Please get in touch if you think our work could be mutally beneficial.</p>
                <div className="address">
                    <p>1234 Random Road</p>
                    <p>Random Town, California 12345</p>
                </div>
                <div className="phone-number">
                    <i class="fa-solid fa-phone"></i>
                    <p>555-555-5555</p>
                </div>
                <div className="email">
                    <i class="fa-solid fa-envelope"></i>
                    <p>notarealemail.gmail.com</p>
                </div>
                <div className="links">
                    <i class="devicon-github-original"></i>
                    <i class="devicon-linkedin-plain"></i>
                    <i class="devicon-facebook-plain"></i>

                </div>
            </div>
            <img src={profile} alt="profile"></img>
        </footer>
    )
}

export default Footer;