import React, {Fragment} from "react";
import "./styles/main.css";

const Load = () =>{

    return(
        <Fragment>
            <section id="loader">
                <h1 className="m_text">System Online</h1>
                <br/><br/>
                <p>
                    <h2>Booting...</h2>
                </p>
                    <br/>
                    <h2>Gathering Resources (100%)</h2>
                    <h2>####################</h2>
                    <br/><br/>
                    <h2>Resources Loaded Successfully</h2>
                    <br/><br/>
                    <h2>Starting Now...</h2>
            </section>
        </Fragment>
    );

}

export default Load;