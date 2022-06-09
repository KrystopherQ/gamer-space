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
                    <div class="hero min-h-screen" style={{backgroundImage: `url("https://melmagazine.com/wp-content/uploads/2018/08/1PLZJfMY2tvncNstYR59cmw.gif")`}}>
                        <div class="hero-content text-center">
                            <div class="max-w-md">
                                <h1 class="text-5xl font-bold text-neutral">GaMeR sPaCe</h1>
                                <p class="py-6 font-bold text-neutral">In A wOrLd WhErE GaMeRs ArE nOt ToXiC</p>
                                <button class="btn btn-primary">Login/Signup</button>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </>

    )
}
export default Portal