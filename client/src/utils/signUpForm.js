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

        // const theForm = event.currentTarget;
        // if(theForm.checkValidity() ===false){
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
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
        {/* login use in loginForm -> change to LoginForm */}
        {/* <input type="text" placeholder="email" class="input input-bordered input-info w-full max-w-xs" />
        <input type="text" placeholder="password" class="input input-bordered input-info w-full max-w-xs" /> */}

        {/* signup */}
        {/* noValidate validated={validated} */}
        <form  onSubmit={handleFormSubmit}>
            <input type="text" placeholder="username" className="input input-bordered input-info w-full max-w-xs" 
            onChange={handleInputChange} 
            defaultValue={userFormData.username}
            />
            <input type="text" placeholder="email" className="input input-bordered input-info w-full max-w-xs" 
            onChange={handleInputChange} 
            defaultValue={userFormData.email}
            />
            <input type="text" placeholder="password" className="input input-bordered input-info w-full max-w-xs"
            onChange={handleInputChange} 
            defaultValue={userFormData.password}
            />
            <input  type="submit" value="Submit" />
            {/* <button className="btn btn-primary"
            disabled={!(userFormData.username && userFormData.email && userFormData.password)}
            type="submit">
            Submit
            </button> */}
        </form>
        </>
    )
}

export default SignUpForm;