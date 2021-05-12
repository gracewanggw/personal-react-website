import pic from "./profile.jpg";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import FunPics from "./components/FunPics.js";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"; 


function App() {
  const header = ["Hi there!", <br />,"Welcome to my website!"];
  const intro = ["I am a Dartmouth '24 from Houston, Texas.",<br />, "Explore this website to get to know me!"];

  const about = <ul>
    <li> Houston, TX</li>
    <li> grace.wang.24@dartmouth.edu</li>
    <li> Aspiring computer science major</li>
  </ul>
  const contact = <ul>
    <a href="https://www.instagram.com/grace.wangggg/">Instagram</a> 
    <a href="https://www.linkedin.com/in/gracewang809/">LinkedIn</a>
    <a href="https://github.com/gracewanggw">GitHub</a>
  </ul>

  return (
    <div className = "App"> 
          <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route path="/Home"> 
            <div className="heading">
              <h1>{header}</h1>
            </div>
            <figure>
                  <img src={pic} alt="Hi!" className="profilephoto"/>
            </figure>
            <h2> Grace Wang </h2>
            <p>{intro}</p>
            <hr></hr>
            <div>{contact}</div>
          </Route>
          <Route path="/About">
            <div>
              <FunPics/>
              <h2>Contact: </h2>
              <div>{contact}</div>
            </div>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}


export default App;
