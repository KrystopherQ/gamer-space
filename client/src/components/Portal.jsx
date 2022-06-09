import React, {useState} from "react";
import { Link } from "react-router-dom";
import {signUpForm} from '../utils/signUpForm'
import {loginForm} from '../utils/loginForm'
import Auth from '../utils'

const portal = () => {
    // useStates

    return (
        <>
            {Auth.loggedIn() ? (
                // render pages 
                <>
                    

                </>
            ) : (
                
                //render login Hero
                <>
                
                </>
            )}
        </>

    )
}