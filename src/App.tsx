import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Example } from './component Task/Example';



function App() {

 const [task, setTask] = useState([
    {id:1, taska:`4+4`, answer:8},
    {id:2, taska:`4+9`, answer:13}
])

function addNum(){

}

  return (
    <div className="App">
     <Example task={task} />
    </div>
  );
}

export default App;
