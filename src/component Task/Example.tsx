import React from "react";
import { InputExample } from "./InputExample";
import { Link } from "react-router-dom";

export type ExampleTaskPropsType = {
    task: Array<{id: number, taska: string, answer: number}>,
    wrongAnswer: ()=>void,
}


export const Example = (props:ExampleTaskPropsType) => {

return(

    <div>
        <Link to='/example'></Link>
        <h2>Решите пример чтобы войти</h2>
        <h1>{props.task[0].taska}</h1>
        <InputExample answer={props.task[0].answer} wrongAnswer={props.wrongAnswer}/>
    </div>
)
}