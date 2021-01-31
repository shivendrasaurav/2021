import React, { Component, Fragment } from 'react';
import Typed from "typed.js";


class Text extends Component{


    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
        strings: strings,
        typeSpeed: 50,
        onComplete: function(self) {
            if(document.readyState==='complete')
                setInterval(function(){ document.getElementById("loader").style.display="none"; }, 1000);
        },
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }  

    render(){
        
        return(
            <Fragment>
                <span style={{ whiteSpace: 'pre' }} ref={(el) => { this.el = el; }}></span>
            </Fragment>
        );
    }
}
export default Text;