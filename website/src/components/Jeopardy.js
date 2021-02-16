import axios from 'axios';
import {Component} from "react";

class Jeopardy extends Component{
    constructor(props){
        super(props);
        this.state = {data: null}
    }

    fetchData = () => {
        // It will take an indeterminate amount of time for axios to get the data
        // so we use this then/catch format
        // this says: hit this endpoint. Then when you're done do X. 
        // If there is an error at any point, do Y
         axios.get("http://jservice.io/api/random")
         .then((response) => {
           console.log(response);
           this.setState({data: response.data[0]})
         }).catch((error) => {
           console.log(error)
         })
    };

    showAnswer = () =>{
        window.alert("Answer: " + this.state.data.answer);
    } 

    renderData = () => {
        if(this.state.data) {
          return(
            <div>
              <div>{this.state.data.question}</div>
              <button onClick = {this.showAnswer}> Show Answer</button>
              {/* {this.state.data.lines.map((line, idx) => {
                return(<div key ={idx}>{line}</div>)
              })} */}
            </div>
          )
        }else{
          return null
        }
    };

    render(){
        return (
          <div>
              <button onClick = {this.fetchData}>Click here for a fun trivia question!</button>
              {this.renderData()}
          </div>
        ); 
      }
}

export default Jeopardy;