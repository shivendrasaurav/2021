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
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr>
                        <td>.</td>
                        <td>
                            <img src={hw} alt="rn"/>
                            <span><strong>React Native</strong><br/>Works similar to react, uses views and other objects to write native code</span>
                        </td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td colspan="3">
                            <img src={hw} alt="fsd"/>
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
                            <img src={hw} class="locked" alt="flutter"/>
                            <span><strong>Flutter</strong><br/>Unlocked by completing make it fly</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td colspan="2">
                            <img src={hw} alt="nd"/>
                            <span><strong>Native Development</strong><br/>Ability to develop native apps for mobile devices</span>
                        </td>
                        <td>.</td>
                        <td colspan="3">
                            <img src={hw} alt="hw"/>
                            <span><strong>Hello World</strong><br/>This is where it all begins</span>
                        </td>
                        <td>.</td>
                        <td colspan="2">
                            <img src={hw} class="locked" alt="ml"/>
                            <span><strong>Machine Learning</strong><br/>Unlocked by completing how machines learn</span>
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
                            <span><strong>iOS</strong><br/>Unlocked after buying a mac or macbook</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td colspan="3">
                            <img src={hw} alt="uiux"/>
                            <span><strong>UI/UX Design</strong><br/>Gives ability to design User Interface or User Experience for a product</span>
                        </td>

                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
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