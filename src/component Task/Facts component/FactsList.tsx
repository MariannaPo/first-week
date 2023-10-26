import { type } from "os";
import React from "react";
import { useLocation } from "react-router-dom";

type FactsListPropsType = {
    facts: Array<{id: number, title: string, article: string}>,
    exit:()=>void,
}

export const FactsList = (props: FactsListPropsType) => {
    const location = useLocation();


    return(
        <div>
            <h1>Что интересного свзяно с цифрой 8?</h1>
            <h5>*отметьте несколько интересующих фактов и нажмите продолжить чтобы узнать подробнее</h5>
            {props.facts.map((f)=>
                 <ul>
                     <li><p><input type="checkbox" value={f.id}/>{f.title}</p></li>
                </ul>
            )}
            <button>Продолжить</button>
            <button onClick={props.exit}>Выход</button>
        </div>
    )
}