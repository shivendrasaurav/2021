import React, { Fragment, useEffect } from "react";
import "./styles/skills.css";

import hw from "./static/skills/hw.png";

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
                <table>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={hw} className="leaf" alt="bs"/>
                            <span><strong>Bootstrap</strong><br/>Works similar to react, uses views and other objects to write native code</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={hw} className="leaf" alt="sw"/>
                            <span><strong>Service Workers</strong><br/>Works similar to react, uses views and other objects to write native code</span>
                        </td>
                        <td>
                            <img src={hw} className="leaf" alt="sw"/>
                            <span><strong>React</strong><br/>Works similar to react, uses views and other objects to write native code</span>
                        </td>
                        <td>
                            <img src={hw} className="leaf" alt="sw"/>
                            <span><strong>JSON</strong><br/>Works similar to react, uses views and other objects to write native code</span>
                        </td>
                        <td>
                            <img src={hw} className="leaf" alt="sw"/>
                            <span><strong>Node</strong><br/>Works similar to react, uses views and other objects to write native code</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={hw} className="leaf locked" alt="nosql"/>
                            <span><strong>NoSQL</strong><br/>Unlocked by completing achievement "it's all complicated"</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={hw} className="leaf" alt="rdbms"/>
                            <span><strong>SQL</strong><br/>SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={hw} alt="html"/>
                            <span><strong>HTML</strong><br/>Hyper Text Markup Language. Gives ability to make structure for a webpage using various tags</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={hw} alt="css"/>
                            <span><strong>CSS</strong><br/>Cascading Style Sheets. Gives ability to style a webpage using various selectors</span>
                        </td>
                        <td>.</td>
                        <td colSpan="4">
                            <img src={hw} alt="js"/>
                            <span><strong>JS</strong><br/>JavaScript. Can be used to make dynamic webpages. Can be used in both frontend and backend of a website.</span>
                        </td>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={hw} alt="dbms"/>
                            <span><strong>DBMS</strong><br/>Database Management System. used to handle structured or unsctructured data of a website.</span>
                        </td>
                    </tr>
                    <tr>
                    <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td colspan="2">
                            <img src={hw} alt="proto"/>
                            <span><strong>Prototyping</strong><br/>Gives ability to make prototypes of apps and websites using various tools</span>
                        </td>
                        <td colspan="2">
                            <img src={hw} alt="wires"/>
                            <span><strong>Wireframing</strong><br/>Gives ability to make wireframe designs for apps and websites using various tools</span>
                        </td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td>.</td>
                        <td>
                            <img src={hw} className="leaf" alt="rn"/>
                            <span><strong>React Native</strong><br/>Works similar to react, uses views and other objects to write native code</span>
                        </td>
                        <td colspan="4">.</td>
                        <td colspan="4">
                            <img src={hw} style={{width: "72px"}} alt="fsd"/>
                            <span><strong>Full Stack Development</strong><br/>Gives ability to work on both frontend and backend of a project</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td colspan="2">
                            <img src={hw} alt="and"/>
                            <span><strong>Android</strong><br/>Ability to develop native apps for Android</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>
                            <img src={hw} class="locked leaf" alt="flutter"/>
                            <span><strong>Flutter</strong><br/>Unlocked by completing achievement "make it fly"</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td colspan="2">
                            <img src={hw} style={{width: "72px"}} alt="nd"/>
                            <span><strong>Native Development</strong><br/>Ability to develop native apps for mobile devices</span>
                        </td>
                        <td>.</td>
                        <td colspan="4">
                            <img src={hw} style={{width: "96px"}} alt="hw"/>
                            <span><strong>Hello World</strong><br/>This is where it all begins</span>
                        </td>
                        <td>.</td>
                        <td colspan="2">
                            <img src={hw} style={{width: "72px"}} class="locked" alt="ml"/>
                            <span><strong>Machine Learning</strong><br/>Unlocked by completing achievement "how machines learn"</span>
                        </td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td colspan="2">
                            <img src={hw} className="locked" alt="ios"/>
                            <span><strong>iOS</strong><br/>Unlocked by completing achievement "bought an apple"</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td colspan="4">
                            <img src={hw} style={{width: "72px"}} alt="uiux"/>
                            <span><strong>UI/UX Design</strong><br/>Gives ability to design User Interface or User Experience for a product</span>
                        </td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td colspan="3">
                            <img src={hw} alt="webn"/>
                            <span><strong>Web/Native Design</strong><br/>Gives ability to design websites or native applications</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={hw} alt="proto"/>
                            <span><strong>Prototyping</strong><br/>Gives ability to make prototypes of apps and websites using various tools</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={hw} alt="wires"/>
                            <span><strong>Wireframing</strong><br/>Gives ability to make wireframe designs for apps and websites using various tools</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={hw} className="leaf" alt="xd"/>
                            <span><strong>Adobe XD</strong><br/>Adobe XD is a vector-based user experience design tool for web apps and mobile apps, developed and published by Adobe Inc.</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={hw} className="leaf" alt="balasmiq"/>
                            <span><strong>Balasmiq</strong><br/>Balsamiq Wireframes is a rapid low-fidelity UI wireframing tool that reproduces the experience of sketching on a notepad or whiteboard, but using a computer.</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={hw} className="leaf" alt="framer"/>
                            <span><strong>Framer</strong><br/>Framer is a tool to design interactive high-fidelity prototypes for iOS, Android, desktop, or the web.</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={hw} className="leaf" alt="invision"/>
                            <span><strong>Invision</strong><br/> InVisionApp's platform allows design teams to create interactive prototypes of web and mobile applications and gather instant feedback.</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={hw} className="leaf" alt="marvel"/>
                            <span><strong>Marvel</strong><br/>Marvel Prototyping Ltd. provides solution to build prototypes for mobile, Web, and gaming devices.</span>
                        </td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </table>
            </section>
        </Fragment>
    );
}

export default Skills;