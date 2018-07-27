import React, { Component } from 'react';
import './App.css';

class Button extends React.Component{
// initializing state in class
// constructor(props){
// super(props);
// this.state={count:0};
// }
//but in babel we can do this in shorter way

handleClick=()=>{
this.props.onClickFunc(this.props.amtToIncrement);
};
render(){

return(
<button onClick={this.handleClick}>+{this.props.amtToIncrement}</button>
);
}
}


const Result=(props)=>{
return(

<div>{props.countVal}
</div>
);
};



class App extends React.Component{
  state={count:0};
  incrementVal=(amtToIncrement)=>{
    this.setState((prevState)=>({
    count:prevState.count+amtToIncrement
    }));
  };

    render(){
        return(
          <div>
            <Button amtToIncrement={1} onClickFunc={this.incrementVal} />
            <Button amtToIncrement={5} onClickFunc={this.incrementVal} />
            <Button amtToIncrement={10} onClickFunc={this.incrementVal} />
            <Button amtToIncrement={100} onClickFunc={this.incrementVal} />
            <Result countVal={this.state.count} />
            </div>
            );
    }
}

export default App;
