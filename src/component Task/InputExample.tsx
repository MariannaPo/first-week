import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

type InputExamplePropsType = {
    answer: number,
    onWrongAnswer: (wrongAnswer: string) => void,
    cancelHandleClick: ()=> void,
    trueAnswer: ()=>void,
}

export const InputExample = (props: InputExamplePropsType) => {
const [value, setValue] = useState('');

function onChangeHandler(event: ChangeEvent<HTMLInputElement>){
    setValue(event.currentTarget.value);
}
function onClickHandler(){
 if (Number(value) === props.answer){
    props.trueAnswer()
 }else if (value === ''){
    alert('введите ответ')
}else{
    props.onWrongAnswer(value)
 }
}
function buy(){
   props.cancelHandleClick() 
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