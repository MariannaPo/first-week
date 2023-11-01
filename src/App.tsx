import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Example } from './component Task/Example';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Greeting } from './component Task/Greeting';
import { Wrong } from './component Task/Wrong';
import { CancelButton } from './component Task/CancelButton';
import { FactsList } from './component Task/Facts component/FactsList';
import { OpenArticle } from './component Task/Facts component/OpenArticle';


function App() {
  const navigate = useNavigate();
 const [task, setTask] = useState([
    {id:1, taska:`4+4`, answer:8},
    {id:2, taska:`4+9`, answer:13}
])

 const [facts, setFacts ]= useState([
{id: 1, title: 'В современных персональных компьютерах 1 байт равен 8 битам;', article: "ℒ𝑜𝓇𝑒𝓂 𝒾𝓅𝓈𝓊𝓂 𝒹𝑜𝓁𝑜𝓇 𝓈𝒾𝓉 𝒶𝓂𝑒𝓉", isNoted: false},
{id: 2, title: "Атомный номер кислорода равен 8;", article: 'Ｌｏｒｅｍ ｉｐｓｕｍ ｄｏｌｏｒ ｓｉｔ ａｍｅｔ' , isNoted: false},
{id: 3, title: "В солнечной системе 8 планет;", article: '𝕷𝖔𝖗𝖊𝖒 𝖎𝖕𝖘𝖚𝖒 𝖉𝖔𝖑𝖔𝖗 𝖘𝖎𝖙 𝖆𝖒𝖊𝖙' , isNoted: false},
{id: 4, title: "В октете 8 музыкантов;", article: 'L̷o̷r̷e̷m̷ i̷p̷s̷u̷m̷ d̷o̷l̷o̷r̷ s̷i̷t̷ a̷m̷e̷t̷' , isNoted: false},
{id: 5, title: "Все паукообразные имеют 8 ног", article: 'Lπφεl нσгτl dπκπφ гнs λlεs' , isNoted: false},
{id: 6, title: "Восьмой по счету музыкальный интервал – октава", article: 'ꪶꪮ᥅ꫀꪑ ꠸ρᦓꪊꪑ ᦔꪮꪶꪮ᥅ ᦓ꠸ꪻ ꪖꪑꫀꪻ' , isNoted: false},
])

const [cheked, setCheked] = useState('')

function onChangeFactsHandler(event: ChangeEvent<HTMLInputElement>){
  setCheked(event.currentTarget.value);
}

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
const trueAnswer = () => {
  navigate('/factsList')
}

const exitButton = () => {
  navigate('/')
}

// const openArticle = (idArticle: number) => {
// navigate('/article', {
//   state: {
//     idArticle
//   }
// })
// }


const openArt = (isNoted: boolean)=>{
let resultFilt = facts.filter(f=>{
  if(f.isNoted === true){
    setFacts(resultFilt)
  }
})
}

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Greeting/>}/>
        <Route path='/example' element={<Example task={task} onWrongAnswer={handleWrongAnswer} cancelHandleClick={cancelHandleClick} trueAnswer={trueAnswer}/>}/>
        <Route path='/wrong' element={<Wrong  tryAgain={tryAgain} cancelHandleClick={cancelHandleClick}/>}/>
        <Route path='/cancel' element={<CancelButton/>}/>
        <Route path='/factsList' element={<FactsList facts={facts} exit={exitButton} onChangeFactsHandler={onChangeFactsHandler}/>}/>
        <Route path='/article' element={<OpenArticle facts={facts} />}/>
      </Routes>
    </div>
  );
}

export default App;
