import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Example } from './component Task/Example';
import { Modal } from './component Task/Modal';



function App() {

 const [task, setTask] = useState([
    {id:1, taska:`4+4`, answer:8},
    {id:2, taska:`4+9`, answer:13}
])

const [active, setActive] = useState(true)

const wrongAnswer = () => {
  
}

  return (
    <div className="App">
     <Example task={task} wrongAnswer={wrongAnswer}/>
     <Modal active = {active} setActive={setActive(true)}/>
    </div>
  );
}

export default App;
