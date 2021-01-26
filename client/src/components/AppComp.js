import React, { Fragment, useEffect } from "react";
import "./styles/app.css";
import cr from "./static/thumbnails/cr.png";
import rh from "./static/thumbnails/rh.png";
import hk from "./static/thumbnails/hk.png";
import tcdb from "./static/thumbnails/tcdb.png";
import ss from "./static/thumbnails/ss.png";
import calc from "./static/thumbnails/calc.png";
import ttt from "./static/thumbnails/ttt.png";

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

function default_text(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; ";
}
const Apps = () =>{
    
    useEffect(() => {
        default_text();
    }, []);

    return(
        <Fragment>
            <section className="apps">
                <h2 style={{fontSize: "6vh", fontFamily: "Apex MK2", color: "#1e1e1e"}}>Apps</h2><br/><br/>

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
                                <h3>Calculator</h3>
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

                <br/>

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
            <section className="inverted">
                <h2 style={{fontSize: "6vh", fontFamily: "Apex MK2", color: "#1e1e1e"}}>Apps</h2><br/><br/>

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
                                <h3>Calculator</h3>
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

                <br/>

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
        </Fragment>
    );
}

export default Apps;