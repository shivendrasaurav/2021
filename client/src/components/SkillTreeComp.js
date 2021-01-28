import React, { Fragment, useEffect } from "react";
import "./styles/skills.css";

function default_text(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; ";
}
const Skills = () =>{
    
    useEffect(() => {
        default_text();
    }, []);

    return(
        <Fragment>
            <section class="drawer">
                <h2 style={{fontSize: "6vh", fontFamily: "Cyberpunk", color: "#1ecece", textShadow: "1px 4px #1e1e1e"}}>Skill Tree</h2><br/>
                <ul className="root">
                    <li>Hello World
                        <ul className="nest">
                            <li className="nest">Programming
                            <ul className="cp">
                                <li>C/C++</li>
                                <li>Python</li>
                            </ul>
                            </li>
                            <li className="nest">Full Stack Development
                                <ul className="fed">
                                    <li>Front End Development
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS
                                                <ul className="nest">
                                                    <li>Bootstrap</li>
                                                    <li>Fluent Design for Web</li>
                                                    <li>Foundation</li>
                                                    <li>Materialize</li>
                                                    <li>Sass</li>
                                                </ul>    
                                            </li>
                                            <li>JS
                                                <ul className="nest">
                                                    <li>JSON</li>
                                                    <li>React
                                                        <ul className="node">
                                                            <li>Redux</li>
                                                        </ul>
                                                    </li>
                                                    <li>Service Workers
                                                        <ul className="node">
                                                            <li>PWA</li>
                                                            <li>Push Notifications</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="bed">
                                    <li>Back End Development
                                        <ul>
                                            <li>DBMS
                                                <ul className="nest">
                                                    <li>RDBMS</li>
                                                    <li>NoSQL</li>
                                                </ul>    
                                            </li>
                                            <li>JS
                                                <ul className="nest">
                                                    <li>Node
                                                        <ul className="node">
                                                                <li>NPM</li>
                                                                <li>Express</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </Fragment>
    );
}

export default Skills;