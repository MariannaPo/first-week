import React, { ChangeEvent} from "react";
import { useLocation } from "react-router-dom";

type FactsListPropsType = {
    facts: Array<{id: number, title: string, article: string, isNoted: boolean}>,
    exit:()=>void,
    checkedFacts: (factId: number, isNoted: boolean)=>void,
    openArticle: ()=>void,
}
export const FactsList = (props: FactsListPropsType) => {


    return(
        <div>
            <h1>Что интересного свзяно с цифрой 8?</h1>
            <h5>*отметьте несколько интересующих фактов и нажмите продолжить чтобы узнать подробнее</h5>
            {
            props.facts.map(f=>{
                function onChangeFactsHandler(event: ChangeEvent<HTMLInputElement>){
                    props.checkedFacts(f.id, event.currentTarget.checked)
                }
            return(
                 <ul>
                     <li><p><input type="checkbox" value={f.id}   onChange={onChangeFactsHandler}/>{f.title} </p></li>
                </ul>
            )
            }
          )}
            <button onClick={props.openArticle}>Продолжить</button>
            <button onClick={props.exit}>Выход</button>
        </div>
    )
}