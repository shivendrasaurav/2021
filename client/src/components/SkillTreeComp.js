import React, { Fragment, useEffect } from "react";

function default_text(){
    document.getElementById("command").innerHTML = "SAMURAI &gt; ";
}
const Skills = () =>{
    
    useEffect(() => {
        default_text();
    }, []);

    return(
        <Fragment>
            <section id="hero">
                <ul>
                    <li>Hisab Kitab</li>
                    <li>Corona Rakshak</li>
                    <li>REVA HACK &lt;/&gt; 2020</li>
                    <li>The Code Drop Box</li>
                    <li>Calculator</li>
                    <li>Tic Tac Toe</li>
                </ul>
            </section>
        </Fragment>
    );
}

export default Skills;