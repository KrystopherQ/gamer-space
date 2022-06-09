import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUpForm } from '../utils/signUpForm'
import { loginForm } from '../utils/loginForm'
import Auth from '../utils/auth'

const Portal = () => {
    const [showPortal, setShowPortal] = useState(false);

    return (
        <>
            {Auth.loggedIn() ? (
                // render pages 
                <>


                </>
            ) : (
                //render login Hero
                <>
                    <div className="hero min-h-screen" style={{backgroundImage: `url("https://melmagazine.com/wp-content/uploads/2018/08/1PLZJfMY2tvncNstYR59cmw.gif")`}}>
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold text-neutral">GaMeR sPaCe</h1>
                                <p className="py-6 font-bold text-neutral">In A wOrLd WhErE GaMeRs ArE nOt ToXiC</p>
                                <button className="btn btn-primary"
                                onClick={() =>setShowPortal(true)}>
                                    Login/Signup
                                </button>
                                {/* hidden login/signup */}
                                {/* toggle toxic */}
                                {/* <button className="btn btn-primary"
                                onClick={() =>setShowPortal(true)}>
                                    Login/Signup
                                </button> */}
                                <>

                                </>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </>

    )
}
export default Portal