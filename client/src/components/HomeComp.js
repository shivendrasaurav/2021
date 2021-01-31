import React, {Fragment} from "react";
import Hero from "./HeroComp";
import Load from "./LoadComp";

const Home = () =>{
    return(
        <Fragment>
            <Load/>
            <Hero/>
        </Fragment>
    );
}

export default Home;