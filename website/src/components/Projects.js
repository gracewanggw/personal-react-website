import {Component} from "react"
import remMe from "../rememberMe.png";
import tripP from "../tripPacker.png";
import wispApp from "../rideNow.png";

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {idx: 0, end: 0};
        const rememberMe = <div class="img_wrap">
            <img src={remMe} alt="Hi!" className="projectPhoto"/>
            <div className="img_description">
                <h1> RememberMe</h1>
                <p> RememberMe is an app that aims to help patients with Alzheimers remember their friends and family. </p>
                <p> This app was made with Java in AndroidStudio </p>
            </div>
            </div>;
        const tripPacker = <div class="img_wrap">
            <img src={tripP} alt="Hi!" className="projectPhoto"/>
            <div className="img_description">
                <h1> TripPacker</h1>
                <p> TripPacker is a web application that gives users a recommended list of items to pack based on the location and date the user is travelling. </p>
                <p> This app was built with JavaScript, HTML, and CSS. It also utilizes a weather API to get weather data</p>
            </div>
            </div>;
        const rideNow = <div class="img_wrap">
            <img src={wispApp} alt="Hi!" className="projectPhoto"/>
            <div className="img_description">
                <h1> Ride@Now</h1>
                <p> Ride@Now is an app that aims to facilitate ride sharing at Dartmouth. </p>
                <p> This app is still in progress. </p>
            </div>
            </div>;
        this.projects = [rememberMe, tripPacker, rideNow];
        this.btnTxt = ["Next", "Repeat"];
    }


   nextProject = () => {
       var temp = this.state.idx
       var newIdx = (temp+1)%3;
       this.setState({idx: newIdx});
       if(this.state.idx === 1){
           this.setState({end: 1});
       }
       else{
           this.setState({end:0});
       }
   }

   render(){
    return(
        <div>
            <div> 
                <h2>Projects: </h2>
                <h3 className="img_wrap"> {this.projects[this.state.idx]}</h3>
                <button className="button" onClick={this.nextProject}>{this.btnTxt[this.state.end]}</button>
            </div>
        </div>
    )
}
}

export default Projects;