import React, { useState } from 'react';
import {ADD_USER} from '../utils/mutations'
import {useMutation} from '@apollo/client'
import Auth from '../utils/auth'

const SignUpForm = () => {
    const [userFormData, setUserFormData] = useState({username: '',email:'', password: ''});

    const [validated] = useState(false);
    const [addUser] = useMutation(ADD_USER)
    const handleInputChange = (event) => {
       const {name, value} = event.target;
       setUserFormData({...userFormData, [name]: value})
    };
       
    const handleFormSubmit = async (event) => {    
    event.preventDefault();

        const form = event.currentTarget;
        if(form.checkValidity() ===false){
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const {data} = await addUser({
                variables: {...userFormData}});

            Auth.login(data.addUser.token)
        } catch(err) {
            console.error(err);
            //setShowAlert(true);
        }
        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    }
    
    return (
        <>
        {/* login */}
        <input type="text" placeholder="email" class="input input-bordered input-info w-full max-w-xs" />
        <input type="text" placeholder="password" class="input input-bordered input-info w-full max-w-xs" />

        {/* signup */}
        <input type="text" placeholder="username" class="input input-bordered input-info w-full max-w-xs" />
        <input type="text" placeholder="email" class="input input-bordered input-info w-full max-w-xs" />
        <input type="text" placeholder="password" class="input input-bordered input-info w-full max-w-xs" />
        </>
    )
}

export default SignUpForm;