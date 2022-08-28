import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


import UserInput from './UserInput/UserInput';

import UserOutput from './UserOutput/UserOutput';



class App extends Component {

  // ques 5

  state={
    username:'superman'
  }

  // ques 7

  usernameChangeHandler=(event)=>{
    this.setState({username:event.target.value});

  }






  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        
        {/* <ol>
          <li> create two new Component:userinput and useroutput </li>
          <li> userinput should hold an input element useroutput two paragraphs</li>
          <li> output multiple useroutput Component in the app Component (any paragraph text of your choice)</li>
          <li> pass a username (of your choice ) to useroutput via props and display in there.</li>
          <li> add state to the app Component(=) the username and pass the username to the useroutput Component</li>
          <li> add a method to manipulate the state (=) an event-handler method</li>
          <li> pass the event-handler method refrence to the userinput Component and bind into input change event </li>
          <li>ensure that the new input entered by the user overwrite the old username passed to userOutput</li>
          <li>add two-way binding to your input ( in user input) to also display the starting username</li>
          <li>add styling of your choice to your Component/ element in the Component both with inline style and style sheets</li>
        </ol> */}


        {/* <UserInput  changed={this.usernameChangeHandler}/> */}
          

          {/* ques 8 */}
        <UserInput  
        changed={this.usernameChangeHandler}
        currentName={this.state.username}
        />

        <UserOutput  userName='Moon'/>  
        
        <UserOutput  userName='knight'/> 
         <UserOutput  userName={this.state.username} />







      </div>
    );
  }
}

export default App;
