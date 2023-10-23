import React from "react";
import { Link } from "react-router-dom";

export const Greeting=() => {
return(
    <div>
        <h3>ДОБРО ПОЖАЛОВАТЬ</h3>
        <Link to='/example'><h3>Войти</h3></Link>
        
    </div>
)
}