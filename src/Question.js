import React from 'react';
import './App.css';

class Question extends React.Component{

  myScore = this.props.score

  addScore = (e) => {
    if (e.target.value === this.props.answer.toString()) {
      this.setState({
        score: this.myScore+=1
      })
      e.target.style.backgroundColor = 'green'
    } else {
      this.setState({
        score: this.myScore+=0
      })
      e.target.style.backgroundColor = 'red'
    }
  }

  render(){
    return (
      <div>
        {this.props.text}
        <p></p>
        <button value="true" onClick={this.addScore}>true</button>
        <button value="false" onClick={this.addScore}>false</button>
        {this.myScore}
      </div>
    )
  }
}

export default Question;
