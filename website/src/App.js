import pic from "./profile.jpg";
import pepper from "./pepper.png";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HelloCounter from "./components/HelloCounter.js";
import FunFacts from "./components/FunFacts.js";
import Classes from "./components/Classes.js";
import Jeopardy from "./components/Jeopardy.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"; 


function App() {
  const header = ["Hi there!", <br />,"My name is Grace. Welcome to my website!"];
  const about = ["I am a Dartmouth '24 from Houston, Texas.",<br />, "Currently, I am on-campus taking classes!"];

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
                  <img src={pic} alt="Hi!" className="photo"/>
            </figure>
            <p>{about}</p>
            <p> Explore this website to get to know me!</p>
          </Route>
          <Route path="/About">
            <FunFacts/>
            <Classes/>
            <h2>Contact: </h2>
            <div>{contact}</div>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}


export default App;
