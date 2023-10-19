import { type } from "os";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { TaskPropsType } from "./Example";

type InputExamplePropsType = {
    task: Array<TaskPropsType>
}

export const InputExample = (props: InputExamplePropsType) => {
let [value, setValue] = useState('');

function onChangeHandler(event: ChangeEvent<HTMLInputElement>){
 let a = setValue(event.currentTarget.value);
 console.log(a)
}
// function onClickHandler(){

// }
function buy(){
   alert('Пока! Возвращайся ещё!')  
}
    return(
        <div>
            <input type="number" placeholder="введите ответ" value={value} onChange={onChangeHandler}/>
            
            <div>
                <button>отправить</button> 
                <button onClick={buy}>отменить</button> 
            </div>
            
        </div>
    )
}