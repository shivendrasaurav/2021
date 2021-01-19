import React, {Fragment, useEffect} from "react";
import yt from "./static/social/youtube.png";
import li from "./static/social/linkedin.png";
import gh from "./static/social/github.png";
import tw from "./static/social/twitter.png";
import ig from "./static/social/instagram.png";
import { NavLink } from "react-router-dom";

function change_cmd_text_1(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; Shivendra Saurav";
}

function change_cmd_text_2(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; ls Projekts -all";
}

function change_cmd_text_3(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; run yt TheCodeDrop";
}

function change_cmd_text_4(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; fetch skill_tree";
}

function default_text(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; ";
}

const Hero = () =>{

    useEffect(() => {
        default_text();
    }, []);

    return(
        <Fragment>
            <section id="hero">
                <NavLink className="herolink" to="/apps">
                    <div className="project_topic_wrapper" onMouseOver={change_cmd_text_2} onMouseLeave={default_text}>
                        <div className="project_topic">
                            Projekts
                        </div>
                    </div>
                </NavLink>

                <NavLink className="herolink" to="/skills">
                    <div className="res_topic_wrapper" onMouseOver={change_cmd_text_4} onMouseLeave={default_text}>
                        <div className="res_topic">
                            Skills
                        </div>
                    </div>
                </NavLink>

                <div className="name_wrapper" onMouseOver={change_cmd_text_1} onMouseLeave={default_text}>
                    <div className="name">
                        Shivendra Saurav
                    </div>
                </div>

                <a target="blank" className="herolink" href="https://www.youtube.com/channel/UCnEIkvnbpbQyetPk_K9QNQg?confirm_subscribe=1">
                    <div className="yt_topic_wrapper" onMouseOver={change_cmd_text_3} onMouseLeave={default_text}>
                        <div className="yt_topic">
                            YouTube
                        </div>
                    </div>
                </a>

                <div className="social_wrapper">

                    <a href="https://www.youtube.com/channel/UCnEIkvnbpbQyetPk_K9QNQg?confirm_subscribe=1"><img src={yt} alt="yt" /></a>
                    <a href="https://www.linkedin.com/in/shivendra-saurav-80a8ba191/"><img src={li} alt="li" /></a>
                    <a href="https://github.com/shivendrasaurav"><img src={gh} alt="gh" /></a>
                    <a href="https://twitter.com/ShivendraSaurav"><img src={tw} alt="tw" /></a>
                    <a href="https://www.instagram.com/shivendrasaurav/"><img src={ig} alt="ig" /></a>


                </div>
            </section>
        </Fragment>
    );
}

export default Hero;