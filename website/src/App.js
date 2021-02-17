import pic from "./PC_Group.jpg";
import './App.css';
import Firebase from './firestore/index';
import Navbar from "./components/Navbar/Navbar";
import HelloCounter from "./components/HelloCounter.js";
import FunFacts from "./components/FunFacts.js";
import Jeopardy from "./components/Jeopardy.js";
import ToDoBoard from "./components/ToDoBoard";


function App() {
  console.log(Firebase);
  console.log(Firebase.db);
  const header = ["Hi there!", <br />,"My name is Grace. Welcome to my website!"];
  const about = ["I am a Dartmouth '24 from Houston, Texas.",<br />, "Currently, I am staying in Park City, Utah with a few friends."];
  // const funFacts = <ul>
  //   <li>I LOVE food</li>
  //   <li>I'm currently trying to learn how to play the ukulele</li>
  //   <li>I had to be sledded down by ski patrol the last time I went skiing</li>
  // </ul>
  const funFacts = ["I LOVE food", "I'm currently trying to learn how to play the ukulele",
   "I had to be sledded down by ski patrol the last time I went skiing"];

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
      <ToDoBoard/>
    </div>
  );
}


export default App;
