import React from "react";
import { InputExample } from "./InputExample";

export type ExampleTaskPropsType = {
    task: Array<{id: number, taska: string, answer: number}>,
    onWrongAnswer: (wrongAnswer: string)=>void,
    cancelHandleClick: ()=>void,
    trueAnswer: ()=>void,
}


export const Example = (props:ExampleTaskPropsType) => {

return(

    <div>
        <h2>Решите пример чтобы войти</h2>
        <h1>{props.task[0].taska}</h1>
        <InputExample answer={props.task[0].answer} onWrongAnswer={props.onWrongAnswer} cancelHandleClick={props.cancelHandleClick} trueAnswer={props.trueAnswer}/>
    </div>
)
}