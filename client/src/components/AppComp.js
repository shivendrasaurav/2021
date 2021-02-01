import React, { Fragment, useEffect } from "react";
import "./styles/app.css";

import fdweb from "./static/thumbnails/fdweb.png";
import ted from "./static/thumbnails/ted.png";
import dsc from "./static/thumbnails/dsc.png";
import ss from "./static/thumbnails/ss.png";

import cr from "./static/thumbnails/cr.png";
import rh from "./static/thumbnails/rh.png";
import hk from "./static/thumbnails/hk.png";
import tcdb from "./static/thumbnails/tcdb.png";
import calc from "./static/thumbnails/calc.png";
import ttt from "./static/thumbnails/ttt.png";

import rbcg from "./static/thumbnails/rbcg.png";
import scrl from "./static/thumbnails/scrl.png";
import strm from "./static/thumbnails/strm.png";

//Apps Commands Below
function change_cmd_text_1(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; help 'corona rakshak' --describe";
}
function change_cmd_text_2(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; help 'hisab kitab' --describe";
}
function change_cmd_text_3(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; help 'reva hack </> 2020' --describe";
}
function change_cmd_text_4(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; help 'the code drop box' --describe";
}
function change_cmd_text_6(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; help 'calculator' --describe";
}
function change_cmd_text_7(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; help 'tic tac toe' --describe";
}

//Websites Commands Below
function change_cmd_text_8(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; visit 'fdweb' --now";
}
function change_cmd_text_9(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; visit 'tedxreva' --now";
}
function change_cmd_text_10(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; visit 'revahack' --now";
}
function change_cmd_text_11(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; visit 'dscreva' --now";
}
function change_cmd_text_12(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; visit 'strwshks' --now";
}

//Tools Commands Below
function change_cmd_text_13(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; use --new 'rcbg'";
}
function change_cmd_text_14(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; use --new 'scrl'";
}
function change_cmd_text_15(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; use --new 'strm'";
}

function default_text(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; ";
}
const Apps = () =>{
    
    useEffect(() => {
        default_text();
    }, []);

    return(
        <Fragment>
            <div className="app_container">
                <section className="drawer">
                    <h2 style={{fontSize: "6vh", fontFamily: "Cyberpunk", color: "#1ecefe", textShadow: "1px 4px #1e1e1e"}}>Websites</h2><br/>

                    <div className="app_wrapper" onMouseOver={change_cmd_text_8} onMouseLeave={default_text}>
                        <div className="app">
                            <div className="app_row">
                                <img className="thumbnail" alt="fdweb" src={fdweb} />  
                                <div className="app_name">
                                    <h3>Fluent Design</h3><h3>For Web</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="app_row">
                                <p>
                                Fluent Design for Web is Open Source, Cross Platform, CSS Framework which is easy to use and very flexible in nature. It helps dvelopers create environments which are more accesible and engaging for users. Learn more about Fluent Design for Web by following this <a href="https://fluentdesignforweb.github.io/">link</a>.
                                </p>                        
                            </div>
                        </div>
                    </div>

                    <div className="app_wrapper" onMouseOver={change_cmd_text_9} onMouseLeave={default_text}>
                        <div className="app">
                            <div className="app_row">
                                <img className="thumbnail" alt="ted" src={ted} />  
                                <div className="app_name">
                                    <h3>TEDx</h3><h3>REVAUniversity</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="app_row">
                                <p>
                                    TEDxREVAUniversity is an independently organised TED event. This event is an collective endeavour 
                                    of students from different schools of REVA University. The aim of this event is to share great 
                                    stories and diversified ideas with our community of 10,000+ students, faculties, and staff in 
                                    order to inspire them to innovate and bring the change they want to see in the world.
                                    Visit <a href="http://tedxrevauniversity.com/" target="blank">TEDxREVAUniversity</a> to know more.
                                </p>                        
                            </div>
                        </div>
                    </div>
                    <div className="app_wrapper" onMouseOver={change_cmd_text_10} onMouseLeave={default_text}>
                        <div className="app">
                            <div className="app_row">
                                <img className="thumbnail" alt="rh" src={rh} />  
                                <div className="app_name">
                                    <h3>REVA HACK</h3><h3>&lt;/&gt; 2020</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="app_row">
                                <p>
                                    REVA HACK &lt;/&gt; 2020 is a student community-focused virtual Hackathon, with an aim of encouraging and providing a platform for students to showcase their talents and innovative ideas in developing projects through coding and using latest technologies. See REVA HACK &lt;/&gt; 2020 results using this <a href="https://revahack.com/">link</a>.
                                </p>                        
                            </div>
                        </div>
                    </div>

                    <br/>
                    
                    <div className="app_wrapper" onMouseOver={change_cmd_text_11} onMouseLeave={default_text}>
                        <div className="app">
                            <div className="app_row">
                                <img className="thumbnail" alt="dsc" src={dsc} />  
                                <div className="app_name">
                                    <h3>DSC</h3><h3>REVAUniversity</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="app_row">
                                <p>
                                    DSC REVA is a community group for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community. Visit DSCREVA using this <a href="https://dscreva.com/">link</a>.
                                </p>                        
                            </div>
                        </div>
                    </div>

                    <div className="app_wrapper" onMouseOver={change_cmd_text_12} onMouseLeave={default_text}>
                        <div className="app">
                            <div className="app_row">
                                <img className="thumbnail" alt="ss" src={ss} />  
                                <div className="app_name">
                                    <h3>Strawsome</h3><h3>Shakes</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="app_row">
                                <p>
                                    Strawsome Shakes is a website where users can create account and after that search and order food from nearby Locations. It's the best place to Find best Snacks and Shakes near you. *This is not a functional website just a static one to demonstrate how it will work. Don't order food as you won't receive it. But you can still checkout the website using this <a href="https://shivendrasaurav.github.io/StrawsomeShakes/">link</a>.
                                </p>                        
                            </div>
                        </div>
                    </div>

                    

                </section>


                <section className="drawer">
                <h2 style={{fontSize: "6vh", fontFamily: "Cyberpunk", color: "#fe1ece", textShadow: "1px 4px #1e1e1e"}}>Apps</h2><br/>

                    <div className="app_wrapper" onMouseOver={change_cmd_text_1} onMouseLeave={default_text}>
                        <div className="app">
                            <div className="app_row">
                                <img className="thumbnail" alt="cr" src={cr} />  
                                <div className="app_name">
                                    <h3>Corona</h3><h3>Rakshak</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="app_row">
                                <p>
                                    Corona Rakshak is a Progressive Web App developed to help users maintain social distaning among each other. Also, it provides with helpful tips regarding how to be safe, live national level stats, and give a Social Distancing Score to the user. Install Corona Rakshak now using this <a href="https://shivendrasaurav.github.io/corona-rakshak/">link</a>.
                                </p>                        
                            </div>
                        </div>
                    </div>

                    <div className="app_wrapper" onMouseOver={change_cmd_text_2} onMouseLeave={default_text}>
                        <div className="app">
                            <div className="app_row">
                                <img className="thumbnail" alt="hk" src={hk} />  
                                <div className="app_name">
                                    <h3>Hisab</h3><h3>Kitab</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="app_row">
                                <p>
                                    Hisab Kitab is an app for keeping track of credits, debits given to friends, families, and coworkers. It is easy to install and even easier to use. It doubles as Web App which measns you can use it without installing this app on your phone. Give it a try now using this <a href="https://hisabkitabapp.herokuapp.com/">link</a>.
                                </p>                        
                            </div>
                        </div>
                    </div>
                    <div className="app_wrapper" onMouseOver={change_cmd_text_3} onMouseLeave={default_text}>
                        <div className="app">
                            <div className="app_row">
                                <img className="thumbnail" alt="rh" src={rh} />  
                                <div className="app_name">
                                    <h3>REVA HACK</h3><h3>&lt;/&gt; 2020</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="app_row">
                                <p>
                                    REVA HACK &lt;/&gt; 2020 is a student community-focused virtual Hackathon, with an aim of encouraging and providing a platform for students to showcase their talents and innovative ideas in developing projects through coding and using latest technologies. See REVA HACK &lt;/&gt; 2020 results using this <a href="https://revahack.com/">link</a>.
                                </p>                        
                            </div>
                        </div>
                    </div>

                    <br/>
                    
                    <div className="app_wrapper" onMouseOver={change_cmd_text_4} onMouseLeave={default_text}>
                        <div className="app">
                            <div className="app_row">
                                <img className="thumbnail" alt="tcdb" src={tcdb} />  
                                <div className="app_name">
                                    <h3>The Code</h3><h3>Drop Box</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="app_row">
                                <p>
                                This is the official Progressive Web App for The Code Drop. You can find all the latest content from The Code Drop here on this app posted regularly. It can be installed by just clicking on the install button which it pormpts when you visit the website. Go on, give it a try and install the app from this <a href="https://shivendrasaurav.github.io/The-Code-Drop-Box/">link</a>.
                                </p>                        
                            </div>
                        </div>
                    </div>

                    <div className="app_wrapper" onMouseOver={change_cmd_text_6} onMouseLeave={default_text}>
                        <div className="app">
                            <div className="app_row">
                                <img className="thumbnail" alt="calc" src={calc} />  
                                <div className="app_name">
                                    <h3>Calculator</h3><h3>&nbsp;</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="app_row">
                                <p>
                                    Built using Vanilla JS, this is a simple Calculator made using Fluent Design for Web. It is a Progressive Web App which can be installed this Calculator using this <a href="https://shivendrasaurav.github.io/calculator/">link</a>.
                                </p>                        
                            </div>
                        </div>
                    </div>

                    <div className="app_wrapper" onMouseOver={change_cmd_text_7} onMouseLeave={default_text}>
                        <div className="app">
                            <div className="app_row">
                                <img className="thumbnail" alt="ttt" src={ttt} />  
                                <div className="app_name">
                                    <h3>Tic Tac</h3><h3>Toe</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="app_row">
                                <p>
                                    Built using Vanilla JS, this is a simple Tic Tac Toe Game made using Fluent Design for Web. You can either play Single Player (With CPU) or Multiplayer (With your friends). Also it is a Progressive Web App which can be installed this Calculator using this <a href="https://shivendrasaurav.github.io/Tic-Tac-Toe/">link</a>.
                                </p>                        
                            </div>
                        </div>
                    </div>

                </section>

                <section className="drawer">
                <h2 style={{fontSize: "6vh", fontFamily: "Cyberpunk", color: "#1ecece", textShadow: "1px 4px #1e1e1e"}}>Tools</h2><br/>

                    <div className="app_wrapper" onMouseOver={change_cmd_text_13} onMouseLeave={default_text}>
                        <div className="app">
                            <div className="app_row">
                                <img className="thumbnail" alt="rbcg" src={rbcg} />  
                                <div className="app_name">
                                    <h3>Random Background</h3><h3>Color Generator</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="app_row">
                                <p>
                                    It generates three random r,g,b values between 0 and 255 and uses them to make a unique background everytime the page reloads, refreshes or when the button is clicked. See it in action using this <a href="https://shivendrasaurav.github.io/RBCG/">link</a>.
                                </p>                        
                            </div>
                        </div>
                    </div>

                    <div className="app_wrapper" onMouseOver={change_cmd_text_14} onMouseLeave={default_text}>
                        <div className="app">
                            <div className="app_row">
                                <img className="thumbnail" alt="scrl" src={scrl} />  
                                <div className="app_name">
                                    <h3>Scroll</h3><h3>Meter</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="app_row">
                                <p>
                                    It's decades since we are using devices such as computers and laptops, browsing internet, typing and scrolling through pages. What if we get to know how much we have scrolled through pages per session and so? In this small project I have implemented a scroll meter which just tells how much meter you have scrolled through. See it in action using this <a href="https://shivendrasaurav.github.io/Scroll-Meter/">link</a>.
                                </p>                        
                            </div>
                        </div>
                    </div>

                    <div className="app_wrapper" onMouseOver={change_cmd_text_15} onMouseLeave={default_text}>
                        <div className="app">
                            <div className="app_row">
                                <img className="thumbnail" alt="strm" src={strm} />  
                                <div className="app_name">
                                    <h3>Stream</h3><h3>Placeholders</h3>
                                </div>
                            </div>
                            <hr/>
                            <div className="app_row">
                                <p>
                                    Stream Placeholders made using HTML + CSS. The required Placeholder can simply be opened by clicking on the link. No hassle of creating a scene, can be used with any streaming software.  See it in action using this <a href="https://shivendrasaurav.github.io/Stream_Placeholders/">link</a>.
                                </p>                        
                            </div>
                        </div>
                    </div>
                
                </section>
            </div>
        </Fragment>
    );
}

export default Apps;