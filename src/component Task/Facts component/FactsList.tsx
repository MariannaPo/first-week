import { type } from "os";
import React from "react";

type FactsListPropsType = {
    facts: Array<{id: number, title: string, article: string}>
}

export const FactsList = (props: FactsListPropsType) => {

    return(
        <div>
            <h1>Что интересного свзяно с цифрой 8?</h1>
            {props.facts.map((f)=>
                 <ol>
                     <li><p><input type="checkbox" value={f.id}/>{f.title}</p></li>
                </ol>
            )}
        </div>
    )
}