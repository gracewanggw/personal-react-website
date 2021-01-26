import pic from "./PC_Group.jpg";
import './App.css';

function App() {
  var name = null;
  const header = "Hi there!";
  const intro = "My name is Grace. Welcome to my website!";
  const about = ["I am a Dartmouth '24 from Houston, Texas.",<br />, "Currently, I am staying in Park City, Utah with a few friends."];
  const funFacts = <ul>
    <li>I LOVE food</li>
    <li>I'm currently trying to learn how to play the ukulele</li>
    <li>I had to be sledded down by ski patrol the last time I went skiing</li>
  </ul>
  const contact = <ul>
    <li class = "dark_blue_text"><a href="https://www.instagram.com/grace.wangggg/">Instagram</a> </li>
    <li class = "dark_blue_text"><a href="https://www.linkedin.com/in/gracewang809/">LinkedIn</a></li>
    <li class = "dark_blue_text"><a href="https://github.com/gracewanggw">GitHub</a></li>
  </ul>

  const addNameFunction= () =>{
    namesList.push(name);
    console.log(name);
  }

  const namesList = ["Grace"];
  const namesMap = namesList.map((name) => {
   return(
     <p>{name} said hi!</p>
   )
 });

  return (
    <div className = "App">
      <head>
        <title>Personal Website</title>
      </head>
      <body class="background_color">
        <h1>{header}</h1>
        <h2 class = "pink_text">{intro}</h2>
        <p class="dark_blue_text">{about}</p>
        <img className = "photo" src={pic} />
            <h2 class="pink_text">Here are a few fun facts about me</h2>
            <div> {funFacts}</div>
            <h2 class = "pink_text">Contact: </h2>
            <div>{contact}</div>
          <div>
            {namesMap}
          </div>
          <input type="text" value={name}></input>
          <button onClick ={addNameFunction()}>SUBMIT</button>
      </body>
    </div>
  );
}


export default App;
