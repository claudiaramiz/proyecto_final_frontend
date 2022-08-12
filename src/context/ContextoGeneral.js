import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ContextoGeneral = (props) => {

    const [isLogin, setIsLogin] = useState('');
    const [isLogout, setIsLogout] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    return (
        <ThemeContext.Provider value={{
            isLogin, setIsLogin,
            name, setName,
            id, setId
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ContextoGeneral;