import {Component} from "react"

class FunFacts extends Component{
    constructor(props){
        super(props);
        this.state = {idx: 0, end: 0};
        this.funFacts = ["I LOVE food", "I'm currently trying to learn how to play the ukulele",
        "I had to be sledded down by ski patrol the last time I went skiing"];
        this.btnTxt = ["Next fact", "Repeat"];
    }


   nextFact = () => {
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
            <h2>Here are a few fun facts about me</h2>
            <div> {this.funFacts[this.state.idx]}</div>
            <button onClick={this.nextFact}>{this.btnTxt[this.state.end]}</button>
        </div>
    )
}
}

export default FunFacts;