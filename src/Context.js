import React from 'react';
import { useApolloClient } from '@apollo/client';


export const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
    const client = useApolloClient();
    const [isAuth, setIsAuth] = React.useState(() => {
        return window.sessionStorage.getItem('token')
    });
    const user = { isAuth };
    const login = (token) => {
        setIsAuth(true);
        window.sessionStorage.setItem('token', token);
    }

    const logout = () => {
        setIsAuth(false);
        window.sessionStorage.removeItem('token');
        client.resetStore();
    }

    return (
        <AppContext.Provider value={{ user, login, logout }}>
            {children}
        </AppContext.Provider>

    );
}

//Utilizamos render props