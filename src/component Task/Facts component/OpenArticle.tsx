import React from "react";
import { useLocation } from "react-router-dom";

type OpenArticlePropsType = {
    facts: Array<{id: number, title: string, article: string}>,
}

export const OpenArticle = (props: OpenArticlePropsType) => {
    const location = useLocation();


    // const openArt = () => {
    //     {props.facts.map((f)=>
    //         <div>
    //         <h2>{f.title}</h2>
    //         <h5>{f.article}</h5>
    //         </div>
    //         )}
    // }

    // const filtArt = () => {
    //     props.facts.filter(()=>{})
    // }

    return(
        <div>
                {props.facts.map((f)=>
                <div>
                <h2>{f.title}</h2>
                <h5>{f.article}</h5>
                </div>
               
                )}
        </div>
)
}