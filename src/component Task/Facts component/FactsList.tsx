import { type } from "os";
import React, { ChangeEvent, useState } from "react";
import { useLocation } from "react-router-dom";

type FactsListPropsType = {
    facts: Array<{id: number, title: string, article: string, isNoted: boolean}>,
    exit:()=>void,
}

export const FactsList = (props: FactsListPropsType) => {
    const location = useLocation();

    const [article, setArticle] = useState('');

    function chekedHandler(event: ChangeEvent<HTMLInputElement>){
        setArticle(event.currentTarget.value);
    }

    // const checkedFilter = () => {
    //     if(){

    //     }else{

    //     }
    // }

    return(
        <div>
            <h1>Что интересного свзяно с цифрой 8?</h1>
            <h5>*отметьте несколько интересующих фактов и нажмите продолжить чтобы узнать подробнее</h5>
            {props.facts.map((f)=>
                 <ul>
                     <li><p><input type="checkbox" value={f.id} checked={f.isNoted}/>{f.title} </p></li>
                </ul>
            )}
            <button>Продолжить</button>
            <button onClick={props.exit}>Выход</button>
        </div>
    )
}