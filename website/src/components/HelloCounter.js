import { Component } from "react";

class HelloCounter extends Component{
    constructor(props){
        super(props);
        this.state= {count: 0};
    }

    upCount = () => {
        console.log(this.state.count);
        var temp = this.state.count;
        this.setState({count: temp+1});
    }

    sendCount = () => {
        window.alert("You said hi " + this.state.count + " times!");
        this.setState({count: 0});
    }

    render(){
        return(
            <div>
                <h2>Hello Counter: </h2>
                <p>{this.state.count}</p>
                <button onClick={this.upCount}>Say Hi</button>
                <button onClick={this.sendCount}>Send</button>
            </div>
        )
    }
}

export default HelloCounter;