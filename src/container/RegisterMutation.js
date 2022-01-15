import React from "react";
import { gql } from "@apollo/client";
import { Mutation } from '@apollo/client/react/components';



export const REGISTER = gql`
    mutation signup($input: UserCredentials!){
        signup(input: $input)
    }
`;


