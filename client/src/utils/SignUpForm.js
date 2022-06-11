import React, { useState } from 'react';
import { ADD_USER } from './mutations'
import { useMutation } from '@apollo/client'
import Auth from './auth'

const SignUpForm = () => {
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

    const [validated] = useState(false);
    const [addUser] = useMutation(ADD_USER)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value })
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // const theForm = event.currentTarget;
        // if(theForm.checkValidity() ===false){
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
        console.log(userFormData)
        try {
            const { data } = await addUser({
                variables: { ...userFormData }
            });
            Auth.login(data.addUser.token)
        } catch (err) {
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
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="username" placeholder="Username" className="input input-bordered input-info w-full max-w-xs"
                    onChange={handleInputChange}
                    defaultValue={userFormData.username}
                />
                <input type="text" name="email" placeholder="E-mail" className="input input-bordered input-info w-full max-w-xs"
                    onChange={handleInputChange}
                    defaultValue={userFormData.email}
                />
                <input type="password" name="password" placeholder="Password" className="input input-bordered input-info w-full max-w-xs"
                    onChange={handleInputChange}
                    defaultValue={userFormData.password}
                />
                <input className='bg-info text-black mt-2 px-2 rounded font-normal hover:bg-sky-600 hover:font-medium' type="submit" value="Submit Signup" />
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