import React, { useState } from 'react';
import { LOGIN_USER } from './mutations';
import { useMutation } from '@apollo/client';
import Auth from './auth'


const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    //should alert?
    const [login] = useMutation(LOGIN_USER)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...userFormData }
            });
            Auth.login(data.login.token)
        } catch (err) {
            console.error(err);
        }
        setUserFormData({
            username: '',
            email: '',
            password: '',
        })
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="email" placeholder="Email" className="input input-bordered input-info w-full max-w-xs"
                onChange={handleInputChange}
                defaultValue={userFormData.email}
            />
            <input type="password" name="password" placeholder="Password" className="input input-bordered input-info w-full max-w-xs"
                onChange={handleInputChange}
                defaultValue={userFormData.password}
            />
            <input className='bg-info text-black mt-2 px-2 rounded font-normal hover:bg-sky-600 hover:font-medium' type="submit" value="Submit Login" />
            {/* <button className="btn btn-primary"
            disabled={!(userFormData.username && userFormData.email && userFormData.password)}
            type="submit">
            Submit
            </button> */}
        </form>
    )
}
export default LoginForm;