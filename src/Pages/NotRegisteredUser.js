import React from 'react';
import { UserForm } from '../components/UserForm';
import { REGISTER } from '../container/RegisterMutation';
import { LOGIN } from '../container/ LoginMutation';

export const NotRegisteredUser = () => {

    return (
        <>
            <UserForm title='Registration' mutationGql={REGISTER} />
            <UserForm title='Login' mutationGql={LOGIN} />
        </>

    )
}
