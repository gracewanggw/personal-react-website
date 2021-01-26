import pic from "./PC_Group.jpg";
import './App.css';

function App() {
  var name = null;
  const header = ["Hi there!", <br />,"My name is Grace. Welcome to my website!"];
  const about = ["I am a Dartmouth '24 from Houston, Texas.",<br />, "Currently, I am staying in Park City, Utah with a few friends."];
  const funFacts = <ul>
    <li>I LOVE food</li>
    <li>I'm currently trying to learn how to play the ukulele</li>
    <li>I had to be sledded down by ski patrol the last time I went skiing</li>
  </ul>
  const contact = <ul>
    <li><a href="https://www.instagram.com/grace.wangggg/">Instagram</a> </li>
    <li><a href="https://www.linkedin.com/in/gracewang809/">LinkedIn</a></li>
    <li><a href="https://github.com/gracewanggw">GitHub</a></li>
  </ul>

  const onChangeFunction =  (Event) =>{
    name = Event.target.value;
    console.log(name);
  }

 var hiList = ["Grace said hi!"];

  const addNameFunction= () =>{
    window.alert("Thanks for saying hi!")
    
  }


  return (
    <div className = "App"> 
      <head>
        <title>Personal Website</title>
      </head>
      <body>
        <h1>{header}</h1>
        <p>{about}</p>
        <img className = "photo" src={pic} />
            <h2>Here are a few fun facts about me</h2>
            <div> {funFacts}</div>
            <h2>Contact: </h2>
            <div>{contact}</div>
          <h1>
            <div>
              {hiList}
            </div>
            <input type="text" onChange={onChangeFunction} placeholder="Say hi back!"></input>
            <button onClick ={addNameFunction}>SUBMIT</button>
          </h1>
      </body>
    </div>
  );
}


export default App;
