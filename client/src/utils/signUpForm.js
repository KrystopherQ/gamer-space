import React, { useState } from 'react';
import {ADD_USER} from '../utils/mutations'
import {useMutation} from '@apollo/client'
import Auth from '../utils/auth'

const signUpForm = () => {
    const [userFormData, setUserFormData] = useState({username: '',email:'', password: ''});

    const [validated] = useState(false);
    const [addUser] = useMutation(ADD_USER)
    const handleInputChange = (event) => {
        event.preventDefault();
    }

    const form = event.currentTarget;
}