import React from "react";
import ProfilePicture from "./ProfliePicture"; // Import your ProfilePicture component
import '../styles/CustomStyle.css'
const AboutMe = () => {
    return (
        <section id="about-me" className="section">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column">
                        <ProfilePicture /> 
                    </div>
                    <div className="column">
                        <h2 className="title is-2">About Me:</h2>
                        <div className="content">
                            <p>
                                Hi! Nice to meet you! My name is Cody, and I am an aspiring junior full-stack web dev with a passion for learning
                                and a deep interest in solving challenges. I am an avid reader and enjoy hobbies such as model building and collection. I
                                value the process of creation over the end result. I tend to lead a quiet and calm life, cherishing my time at home. Despite
                                my homebody nature, I am social and enjoy engaging conversations where I can learn from others' experiences.
                            </p>
                            <p>
                                If you're interested in contacting me, please feel free to reach out via the Contact section. I look forward to hearing from you!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
