import React, {Fragment} from "react";
import Hero from "./HeroComp";
import logo from "./static/logo.png";
const Home = () =>{
    return(
        <Fragment>
            <div className="pc_only">
                <Hero/>
            </div>
            <div className="phone_only">
                <p>
                    <img src={logo} alt="Phone Logo" className="center logotch" /><br />
                    This website is only made for desktop as of now. Please switch to a desktop to visit this website.
                    Untill then, you can play around by clicking on the Logo above. Spoiler: It Rotates When Touched.
                </p>                   
            </div>
        </Fragment>
    );
}

export default Home;