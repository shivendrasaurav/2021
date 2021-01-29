import React, { Fragment, useEffect } from "react";
import "./styles/skills.css";

import hw from "./static/skills/hw.png";
import ml from "./static/skills/ml.png";
import rn from "./static/skills/rn.png";
import flutter from "./static/skills/flutter.png";
import and from "./static/skills/and.png";
import nat from "./static/skills/nat.png";
import ios from "./static/skills/ios.png";

import uix from "./static/skills/uix.png";
import proto from "./static/skills/proto.png";
import wire from "./static/skills/wire.png";
import wnt from "./static/skills/wnt.png";
import inn from "./static/skills/in.png";
import bl from "./static/skills/bl.png";
import adobe from "./static/skills/adobe.png";
import framer from "./static/skills/framer.png";
import marvel from "./static/skills/marvel.png";

import front from "./static/skills/front.png";
import back from "./static/skills/back.png";
import fsd from "./static/skills/fsd.png";
import dbms from "./static/skills/dbms.png";
import html from "./static/skills/html.png";
import css from "./static/skills/css.png";
import js from "./static/skills/js.png";

import svg from "./static/skills/svg.png";
import fdweb from "./static/skills/fd.png";
import bs from "./static/skills/bs.png";
import sass from "./static/skills/sass.png";
import ms from "./static/skills/ms.png";
import sw from "./static/skills/sw.png";
import react from "./static/skills/react.png";
import json from "./static/skills/json.png";
import node from "./static/skills/node.png";
import sql from "./static/skills/sql.png";
import mysql from "./static/skills/mysql.png";
import psql from "./static/skills/psql.png";
import npm from "./static/skills/npm.png";
import exprs from "./static/skills/exprs.png";
import pwa from "./static/skills/pwa.png";
import redux from "./static/skills/redux.png";

import locked from "./static/skills/locked.png";

function default_text(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; zoom in or out if vertices out of place";
}
const Skills = () =>{
    
    useEffect(() => {
        default_text();
    }, []);

    return(
        <Fragment>
            <section class="drawer">
                <svg style={{height: "100%", width: "100%", zIndex: "-10", position: "absolute"}}>
                    <line x1="42.5%" y1="68%" x2="20%" y2="68%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />
                    <line x1="42.5%" y1="68%" x2="65%" y2="68%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />
                    <line x1="42.5%" y1="50%" x2="42.5%" y2="60%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />
                    <line x1="42.5%" y1="95%" x2="42.5%" y2="60%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />

                    <line x1="48%" y1="45%" x2="42.5%" y2="55%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />
                    <line x1="38%" y1="45%" x2="42.5%" y2="55%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />
                    <line x1="48%" y1="45%" x2="42.5%" y2="38%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />
                    <line x1="38%" y1="45%" x2="42.5%" y2="38%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />

                    <line x1="48%" y1="45%" x2="68%" y2="38%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />
                    <line x1="38%" y1="45%" x2="25%" y2="38%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />
                    <line x1="38%" y1="47%" x2="12.5%" y2="40%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />

                    <line x1="13%" y1="60%" x2="20%" y2="70%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />
                    <line x1="13%" y1="80%" x2="20%" y2="70%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />

                    <line x1="42.5%" y1="95%" x2="38%" y2="100%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />
                    <line x1="42.5%" y1="95%" x2="48%" y2="100%" style={{stroke: "rgb(0,0,0)", strokeWidth:"2", zIndex: "-10"}} />

                </svg>

                <h2 style={{fontSize: "6vh", fontFamily: "Cyberpunk", color: "#1ecece", textShadow: "1px 4px #1e1e1e"}}>Skill Tree</h2><br/><br/>
                <table>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={sass} className="leaf" alt="sass"/>
                            <span><strong>SASS</strong><br/>Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself.</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={ms} className="leaf" alt="materialize"/>
                            <span><strong>Materialize</strong><br/>By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users.</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={locked} className="leaf locked" alt="push"/>
                            <span><strong>Locked</strong><br/>Unlocked by completing achievement "can you notify me about this".</span>
                        </td>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={exprs} className="leaf" alt="express"/>
                            <span><strong>Express</strong><br/>Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.</span>
                        </td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={psql} className="leaf" alt="psql"/>
                            <span><strong>PostgreSQL</strong><br/>PostgreSQL, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={fdweb} className="leaf" alt="fdweb"/>
                            <span><strong>Fluent Design for Web</strong><br/>Fluent Design for Web is Open Source, Cross Platform, CSS Framework which is easy to use and very flexible in nature. It helps dvelopers create environments which are more accesible and engaging for users.</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={pwa} className="leaf" alt="pwa"/>
                            <span><strong>Progressive Web Apps</strong><br/>A progressive web application is a webapp made using HTML CSS and JS which is capable of running on any platform and/or device.</span>
                        </td>
                        <td>
                            <img src={locked} className="leaf locked" alt="redux"/>
                            <span><strong>Locked</strong><br/>Unlocked by completing achievement "where are the reducers".</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={npm} className="leaf" alt="npm"/>
                            <span><strong>npm</strong><br/>npm is a package manager for the JavaScript programming language.</span>
                        </td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={mysql} className="leaf" alt="mysql"/>
                            <span><strong>MySQL</strong><br/>MySQL is the most popular Open Source Relational SQL Database Management System.</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={svg} className="leaf" alt="svg"/>
                            <span><strong>SVG</strong><br/>Scalable Vector Graphics. Can be used to make web friendly images. The vertices of this skill tree has been made using SVG too.</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={bs} className="leaf" alt="bs"/>
                            <span><strong>Bootstrap</strong><br/>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={sw} style={{width: "56px"}} className="leaf" alt="sw"/>
                            <span><strong>Service Workers</strong><br/>A service worker is a script that your browser runs in the background, separate from a web page, helping add some interesting features.</span>
                        </td>
                        <td>
                            <img src={react} style={{width: "56px"}} className="leaf" alt="react"/>
                            <span><strong>React</strong><br/>React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.</span>
                        </td>
                        <td>
                            <img src={json} style={{width: "56px"}} className="leaf" alt="json"/>
                            <span><strong>JSON</strong><br/>JSON is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types.</span>
                        </td>
                        <td>
                            <img src={node} style={{width: "56px"}} className="leaf" alt="node"/>
                            <span><strong>Node</strong><br/>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser.</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={locked} style={{width: "56px"}} className="leaf locked" alt="nosql"/>
                            <span><strong>Locked</strong><br/>Unlocked by completing achievement "it's all distributed"</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={sql} style={{width: "56px"}} className="leaf" alt="rdbms"/>
                            <span><strong>SQL</strong><br/>SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={html} alt="html"/>
                            <span><strong>HTML</strong><br/>Hyper Text Markup Language. Gives ability to make structure for a webpage using various tags</span>
                        </td>
                        <td>.</td>
                        <td>
                            <img src={css} alt="css"/>
                            <span><strong>CSS</strong><br/>Cascading Style Sheets. Gives ability to style a webpage using various selectors</span>
                        </td>
                        <td>.</td>
                        <td colSpan="4">
                            <img src={js} alt="js"/>
                            <span><strong>JS</strong><br/>JavaScript. Can be used to make dynamic webpages. Can be used in both frontend and backend of a website.</span>
                        </td>
                        <td>.</td>
                        <td>.</td>
                        <td>
                            <img src={dbms} alt="dbms"/>
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
                            <img src={front} alt="front"/>
                            <span><strong>Front End Development</strong><br/>Gives ability to make prototypes of apps and websites using various tools</span>
                        </td>
                        <td colspan="2">
                            <img src={back} alt="back"/>
                            <span><strong>Back End Development</strong><br/>Gives ability to make wireframe designs for apps and websites using various tools</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>
                            <img src={rn} className="leaf" alt="rn"/>
                            <span><strong>React Native</strong><br/>Works similar to react, uses views and other objects to write native code</span>
                        </td>
                        <td colspan="4">.</td>
                        <td colspan="4">
                            <img src={fsd} style={{width: "72px"}} alt="fsd"/>
                            <span><strong>Full Stack Development</strong><br/>Gives ability to work on both frontend and backend of a project</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td colspan="1">
                            <img src={and} alt="and"/>
                            <span><strong>Android</strong><br/>Ability to develop native apps for Android</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>
                            <img src={locked} class="locked leaf" alt="flutter"/>
                            <span><strong>Locked</strong><br/>Unlocked by completing achievement "make it fly"</span>
                        </td>
                        <td>.</td>
                        <td colspan="2">
                            <img src={nat} style={{width: "72px"}} alt="nd"/>
                            <span><strong>Native Development</strong><br/>Ability to develop native apps for mobile devices</span>
                        </td>
                        <td>.</td>
                        <td colspan="4">
                            <img src={hw} style={{width: "96px"}} alt="hw"/>
                            <span><strong>Hello World</strong><br/>Where it all begins</span>
                        </td>
                        <td>.</td>
                        <td colspan="2">
                            <img src={locked} style={{width: "72px"}} class="locked" alt="ml"/>
                            <span><strong>Locked</strong><br/>Unlocked by completing achievement "how machines learn"</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td colspan="1">
                            <img src={locked} className="locked" alt="ios"/>
                            <span><strong>Locked</strong><br/>Unlocked by completing achievement "bought an apple"</span>
                        </td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>.</td>
                        <td colspan="4">.</td>
                        <td colspan="4">
                            <img src={uix} style={{width: "72px"}} alt="uiux"/>
                            <span><strong>UI/UX Design</strong><br/>Gives ability to design User Interface or User Experience for a product</span>
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
                            <img src={wnt} alt="webn"/>
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
                        <td colspan="2">
                            <img src={proto} alt="proto"/>
                            <span><strong>Prototyping</strong><br/>Gives ability to make prototypes of apps and websites using various tools</span>
                        </td>
                        <td colspan="2">
                            <img src={wire} alt="wires"/>
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
                        <td colspan="2">
                            <img src={adobe} className="leaf" alt="xd"/>
                            <span><strong>Adobe XD</strong><br/>Adobe XD is a vector-based user experience design tool for web apps and mobile apps, developed and published by Adobe Inc.</span>
                        </td>
                        <td colspan="2">
                            <img src={bl} className="leaf" alt="balasmiq"/>
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
                        <td colspan="2">
                            <img src={framer} className="leaf" alt="framer"/>
                            <span><strong>Framer</strong><br/>Framer is a tool to design interactive high-fidelity prototypes for iOS, Android, desktop, or the web.</span>
                        </td>
                        <td colspan="2">
                            <img src={inn} className="leaf" alt="invision"/>
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
                        <td colspan="2">
                            <img src={marvel} className="leaf" alt="marvel"/>
                            <span><strong>Marvel</strong><br/>Marvel Prototyping Ltd. provides solution to build prototypes for mobile, Web, and gaming devices.</span>
                        </td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                </table>
            </section>
        </Fragment>
    );
}

export default Skills;