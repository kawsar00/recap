import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = ['Sakib', 'Musfiq', 'Tamim', {age:20}]
  const friends = [
    {name:'Shahin', age: 23},
    {name:'Shohag', age: 22},
    {name:'Naim', age: 21},
    {name:'Sagor', age: 20},
  ]

  return (
    <div className="App">
  {/* ***************************state declare********************************** */}
      <CountDown></CountDown>
  {/* *********************************************************************** */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

  {/* *************multiple component using map****************************** */}   
        {
          friends.map(fd => <Friend name={fd.name} age={fd.age}></Friend>)
        }
  {/* *********************************************************************** */}

  {/* ********************component create********************************* */}
        <Users name={name[0]}></Users>
        <Users name='Kabir'></Users>
        <Users age={name[3].age}></Users>
        <Users></Users>
  {/* *********************************************************************** */}
        
        <User></User>

      </header>
    </div>
  );
}

  

  // *********************************map Start**********************************
function Friend(props) {
  const frinedStyle = {
    border: '2px solid white',
    padding: '10px',
    margin: '10px',
    width: '200px'

  }
  return(
    <div style={frinedStyle}>
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
    </div>
  )
}
// ************************************end********************************


// ********************************state start*******************************
function CountDown(props) {
  const [count, setCount] = useState(0);
 
  return(
    <div>
      <button onClick={() => setCount(count + 1)}>My count</button>
      <button onClick={() => setCount(count - 1)}>Delete count</button>
      <h3>My count: {count}</h3>
      <h3>My count: {count + 1}</h3>
      <h3>My count: {count + 2}</h3>
    </div>
  )
}
// **********************************end**********************************

// *******************************component start**********************************
function Users(props) {
  const userStyle = {
    border: '2px solid gold',
    padding: '10px',
    margin: '10px',

  }
  return(
    <div style={userStyle}>
      <h3>I am MR. {props.name || 'Kawsar'}</h3>
      <p>Age: {props.age || 22}</p>
      <p>I am  a professional font end developer</p>
    </div>
  )
}
// ********************************end************************************


// *********************************load API data**********************************
function User(props) {
  const [users, setUsers] = useState([])
  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return(
    <div>
      <ul>
        {
          users.map(data => <li>{data.name}</li>)
        }
      </ul>
    </div>
  )
}

// *********************************end*********************************

export default App;
