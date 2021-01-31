import React, {Fragment} from "react";
import "./styles/main.css";
import Text from "./LoadTextComp";

const Load = () =>{

    return(
        <Fragment>
            <section id="loader">
                <h1 className="m_text">System Online</h1>
                <br/><br/>
                <p>
                    <h2><Text strings={['Booting...\n\nGathering Resources\n####################\n\nResources Loaded Successfully\nStarting Now...']}/></h2>
                </p>
            </section>
        </Fragment>
    );

}

export default Load;