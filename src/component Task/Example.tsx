import React from "react";
import { InputExample } from "./InputExample";
import { type } from "os";
import { tab } from "@testing-library/user-event/dist/tab";

export type TaskPropsType = {
    task: Array<{id: number, taska: string, answer: number}>
}


export const Example = (props:TaskPropsType) => {

return(
    <div>
        <h2>Решите пример чтобы войти</h2>
        <h1>{props.task[0].taska}</h1>
        <InputExample answer={props.task[0].answer}/>
    </div>
)
}