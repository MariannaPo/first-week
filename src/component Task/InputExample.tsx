import { type } from "os";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { TaskPropsType } from "./Example";

type InputExamplePropsType = {
    task: Array<TaskPropsType>
}

export const InputExample = () => {
let [value, setValue] = useState('');

function onChangeHandler(event: ChangeEvent<HTMLInputElement>){
 setValue(event.currentTarget.value)
}
function onClickHandler(props: InputExamplePropsType){
    if (setValue ==) {
        alert('good')
    }else {
        alert('No try again')
    }
    
}

function buy(){
   alert('Пока! Возвращайся ещё!')  
}
    return(
        <div>
            <input type="number" placeholder="введите ответ" value={value} onChange={onChangeHandler}/>
            
            <div>
                <button onClick={onClickHandler}>отправить</button> 
                <button onClick={buy}>отменить</button> 
            </div>
            
        </div>
    )
}