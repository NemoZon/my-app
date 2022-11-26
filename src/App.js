import React, {useState} from 'react';
import './App.css';
import MyButton from './components/UI/MyButton'
import MyList from './components/MyList'

function App() {
  const [btn, setBtn] = useState({id: 0, text: "toggle", active: "disabled"})
  const [list, setList] = useState([
    {id: 0, active: false, text: "0"},
    {id: 1, active: false, text: "1"},
    {id: 2, active: false, text: "2"},
    {id: 3, active: false, text: "3"}
])

  const toggleBtn = () =>{
    if (btn.active === "active") {
      setBtn({...btn, active: "disabled"})
      setList([
        {id: 0, active: false, text: "0"},
        {id: 1, active: false, text: "1"},
        {id: 2, active: false, text: "2"},
        {id: 3, active: false, text: "3"}
    ])
    } 
    else if (btn.active === "disabled") {
      setBtn({...btn, active: "active"})
      setList([
        {id: 0, active: true, text: "0"},
        {id: 1, active: true, text: "1"},
        {id: 2, active: true, text: "2"},
        {id: 3, active: true, text: "3"}
    ])
    }
  }

  return (
    <div className="App">
      <MyButton key={btn.id} text={btn.text} active={btn.active} onClick={toggleBtn}></MyButton>
      <MyList items={list}></MyList>
    </div>
  );
}

export default App;
