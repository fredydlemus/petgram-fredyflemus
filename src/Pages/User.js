import React from 'react';
import { AppContext } from '../Context';
import { SubmitButton } from '../components/SubmitButton/index';

export const User = () => {

    const { logout } = React.useContext(AppContext);

    return (
        <>
            <h1>User</h1>
            <SubmitButton onClick={logout}>Logout</SubmitButton>
        </>
    )
}
