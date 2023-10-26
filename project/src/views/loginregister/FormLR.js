import { render } from '@testing-library/react';
import React from 'react';
import {
    useNavigate,
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

function LoginRegister() {
    let navigation = useNavigate();

    function handleClick() {
        navigation("/admin");

        
    }
    return (
        <>
            <button onClick={handleClick}>Go to admin</button>
            
        </>
        
    )

}

export default LoginRegister;
