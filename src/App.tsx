import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Example } from './component Task/Example';
import { Routes, Route, Link } from 'react-router-dom';
import { Greeting } from './component Task/Greeting';



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
      <Routes>
        <Route path='/' element={<Greeting/>}/>
        <Route path='/example' element={<Example task={task} wrongAnswer={wrongAnswer}/>}/>
      </Routes>
    </div>
  );
}

export default App;
