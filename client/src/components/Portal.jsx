import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUpForm } from '../utils/signUpForm'
import { loginForm } from '../utils/loginForm'
import Auth from '../utils/auth'

const Portal = () => {
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
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content text-center">
                            <div class="max-w-md">
                                <h1 class="text-5xl font-bold">Hello there</h1>
                                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </>

    )
}
export default Portal