import React from "react";
import "../styles/Body.css"
import image1 from "../assets/pexels-aron-visuals-1743165.jpg";
import image2 from "../assets/pexels-eberhard-grossgasteiger-1366919.jpg";
import image3 from "../assets/pexels-eberhard-grossgasteiger-2310641.jpg";
import image4 from "../assets/pexels-pixabay-147411.jpg";
import image5 from "../assets/pexels-simon-berger-1323550.jpg";
import image6 from "../assets/pexels-tobi-675764.jpg";

const Body = () => {
    return (
        <div id="body">
            <h1>My Work</h1>
            <div class="project-container">
                <div class="project">
                    <img src={image1} alt="sakd"></img>
                    <div class="project-overlay">
                        <div class="heading">
                            <h2>Project Name</h2>
                            <div class="links">
                                <i class="devicon-github-original"></i>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                        <div class="description">
                            Short description of this project. A few sentences will do.
                        </div>
                    </div>
                </div>
                <div class="project">
                    <img src={image2} alt="sakd"></img>
                    <div class="project-overlay">
                        <div class="heading">
                            <h2>Project Name</h2>
                            <div class="links">
                                <i class="devicon-github-original"></i>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                        <div class="description">
                            Short description of this project. A few sentences will do.
                        </div>
                    </div>
                </div>
                <div class="project">
                    <img src={image3} alt="sakd"></img>
                    <div class="project-overlay">
                        <div class="heading">
                            <h2>Project Name</h2>
                            <div class="links">
                                <i class="devicon-github-original"></i>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                        <div class="description">
                            Short description of this project. A few sentences will do.
                        </div>
                    </div>
                </div>
                <div class="project">
                    <img src={image4} alt="sakd"></img>
                    <div class="project-overlay">
                        <div class="heading">
                            <h2>Project Name</h2>
                            <div class="links">
                                <i class="devicon-github-original"></i>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                        <div class="description">
                            Short description of this project. A few sentences will do.
                        </div>
                    </div>
                </div>
                <div class="project">
                    <img src={image5} alt="sakd"></img>
                    <div class="project-overlay">
                        <div class="heading">
                            <h2>Project Name</h2>
                            <div class="links">
                                <i class="devicon-github-original"></i>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                        <div class="description">
                            Short description of this project. A few sentences will do.
                        </div>
                    </div>
                </div>
                <div class="project">
                    <img src={image6} alt="sakd"></img>
                    <div class="project-overlay">
                        <div class="heading">
                            <h2>Project Name</h2>
                            <div class="links">
                                <i class="devicon-github-original"></i>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                        <div class="description">
                            Short description of this project. A few sentences will do.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;