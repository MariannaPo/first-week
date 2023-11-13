import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, } from "react-router-dom";

type WrongPropsType={
    tryAgain: ()=>void,
    cancelHandleClick: ()=>void,
}

export const Wrong = (props: WrongPropsType) => {
    const location = useLocation();

    return(
    
        <div>
            <Link to='/wrong'></Link>
            <h2>Ваш ответ неверный: {location.state?.wrongAnswer}</h2>
            <div>
                <h3>Хотите попробовать еще раз?</h3>
                <button onClick={props.tryAgain}>Да</button>
                <button onClick={props.cancelHandleClick}>Нет</button>
            </div>
            
        </div>
    )
}