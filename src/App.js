import React, {Component} from 'react';
import './App.css';
import Hello from './components/Hello.js'

//this is a class component
class App extends Component {

  // this is the state
  state = {
    users: [
      {firstName: 'Jay-R', lastName: 'Gabunada', age:24}, 
      {firstName: 'Jahara', lastName: 'Jimenez', age:21},
      {firstName: 'John', lastName: 'Doe', age:22}
    ], 
    title: "My Web App"  
  }

  //  functions inside a class doesn't need a declaration var/let/const
  addAge = () => {
    let age = this.state.users.map(user => {
        const userAge = user.age += 2
      return userAge
    })
    this.setState({age})
  }

  changeTitle = (event) => {
    return this.setState({
      title: event.target.value
    })
  }

  changeTitleOnClick = (newTitle) => {
    return this.setState({
      title: newTitle
    })
  }

  render = () => {
    return (
      <div className="App">
    <header className="App-header">
      <div>{this.state.title}</div>

       {/* this button adds age  */}
      <button onClick={this.addAge}>Add Age</button>

      { /* two way binding */ } 
      <input type="text" onChange={this.changeTitle} value={this.state.title}></input>

      { /* two ways of adding parameters on a function
       THE BIND METHOD  ------ onClick={this.changeTitleOnClick.bind(this, 'this is a new title')}
       THE FUNCTION METHOD ------  onClick={() => this.changeTitleOnclick('this is a new title')}      
      */ }
      <button onClick={this.changeTitleOnClick.bind(this, 'this is a new title')}>Change Title</button>

      {/* 
      loops through the state using the map method... 
       forEach doesn't work..
      */}
      {this.state.users.map(user => {

        {/* the attributes in the Hello are passed in as props */}
        return <Hello firstname={user.firstName} lastname={user.lastName} age={user.age}></Hello>
      })}



    </header>
  </div>
    )
  }
}


export default App;
