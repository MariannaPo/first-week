import { type } from "os";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { ExampleTaskPropsType } from "./Example";

type InputExamplePropsType = {
    answer: number,
    wrongAnswer: () => void,
}

export const InputExample = (props: InputExamplePropsType) => {
const [value, setValue] = useState('');

function onChangeHandler(event: ChangeEvent<HTMLInputElement>){
    setValue(event.currentTarget.value);
}
function onClickHandler(){
 if (Number(value) === props.answer){
   console.log('yeees')
 }else{
    {props.wrongAnswer()}
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