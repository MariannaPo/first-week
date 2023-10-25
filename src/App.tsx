import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Example } from './component Task/Example';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Greeting } from './component Task/Greeting';
import { Wrong } from './component Task/Wrong';
import { CancelButton } from './component Task/CancelButton';
import { FactsList } from './component Task/Facts component/FactsList';


function App() {
  const navigate = useNavigate();
 const [task, setTask] = useState([
    {id:1, taska:`4+4`, answer:8},
    {id:2, taska:`4+9`, answer:13}
])

const handleWrongAnswer = (wrongAnswer:string) => {
  navigate('/wrong', {
    state: {
      wrongAnswer
    }
  })
}

const tryAgain = () => {
  navigate('/example')
}

const cancelHandleClick = () => {
  navigate('/cancel')
}

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Greeting/>}/>
        <Route path='/example' element={<Example task={task} onWrongAnswer={handleWrongAnswer} cancelHandleClick={cancelHandleClick}/>}/>
        <Route path='/wrong' element={<Wrong  tryAgain={tryAgain} cancelHandleClick={cancelHandleClick}/>}/>
        <Route path='/cancel' element={<CancelButton/>}/>
        <Route path='factsList' element={<FactsList/>}/>
      </Routes>
    </div>
  );
}

export default App;
