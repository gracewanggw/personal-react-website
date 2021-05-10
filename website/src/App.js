import pic from "./PC_Group.jpg";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HelloCounter from "./components/HelloCounter.js";
import FunFacts from "./components/FunFacts.js";
import Jeopardy from "./components/Jeopardy.js";


function App() {
  const header = ["Hi there!", <br />,"My name is Grace. Welcome to my website!"];
  const about = ["I am a Dartmouth '24 from Houston, Texas.",<br />, "Currently, I am staying in Park City, Utah with a few friends."];

  const contact = <ul>
    <li><a href="https://www.instagram.com/grace.wangggg/">Instagram</a> </li>
    <li><a href="https://www.linkedin.com/in/gracewang809/">LinkedIn</a></li>
    <li><a href="https://github.com/gracewanggw">GitHub</a></li>
  </ul>

  return (
    <div className = "App"> 
      <Navbar />
      <head>
        <title>Personal Website</title>
      </head>
      <body>
        <h1 className="header1">{header}</h1>
        <p>{about}</p>
        <img className = "photo" src={pic} />
            <FunFacts/>
            <h2>Contact: </h2>
            <div>{contact}</div>
      </body>
      <Jeopardy/>
      <HelloCounter/>
    </div>
  );
}


export default App;
