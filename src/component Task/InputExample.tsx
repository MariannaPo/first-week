import React, { ChangeEvent, ChangeEventHandler, useState } from "react";


export const InputExample = () => {
let [value, setValue] = useState('');

function onClickHandler(){
    console.log(value)
}

function onChangeHandler(event: ChangeEvent<HTMLInputElement>){
  console.log(setValue(event.currentTarget.value))
}

function buy(){
   
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