import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, } from "react-router-dom";

export const Wrong = () => {
    const location = useLocation();




    return(
    
        <div>
            <Link to='/wrong'></Link>
            <h2>your wrong answer: {location.state?.wrongAnswer}</h2>
        </div>
    )
}