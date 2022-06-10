import React, { useState } from "react";
import Feed from "./Feed.jsx";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Gamer Space-logos_transparent.png";
import SignUpForm from "../utils/SignUpForm";
import LoginForm from "../utils/loginForm";
import Auth from "../utils/auth";

const Portal = () => {
	const [showPortal, setShowPortal] = useState(false);
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<>
			{Auth.loggedIn() ? (
				// render pages
				<>
					<div className="flex">
						<div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 font-serif ">
							<div>
								<img
									src={Logo}
									alt="Logo"
									style={{ width: "200px" }}
								/>
							</div>

							{/*navbar */}
							<ul className="hidden md:flex">
								<li className="btn btn-ghost bg-neutral normal-case text-xl">
									<Link to="/feed">Feed</Link>
								</li>
								<li className="btn btn-ghost normal-case text-xl">
									<Link to="/profile">Profile</Link>
								</li>
								<li className="btn btn-ghost normal-case text-xl">
									<Link to="/friends">Friends</Link>
								</li>
								<li className="btn btn-ghost normal-case text-xl">
									<Link to="/minigames">Mini Games</Link>
								</li>
								<div className="form-control">
									<input
										type="text"
										placeholder="Search"
										className="input input-bordered"
									/>
								</div>
								<button className="btn btn-square btn-outline font-serif">
									<Link to="/searchresults">Go!</Link>
								</button>
							</ul>

							{/*Hamburger */}
							<div onClick={handleClick} className="md:hidden z-10">
								{!nav ? <FaBars /> : <FaTimes />}
							</div>

							{/*Mobile*/}
							<div>
								<ul
									className={
										!nav
											? "hidden"
											: "absolute top-0 left-0 w-full h-screen bg-[#556b2f] flex flex-col justify-center items-center"
									}
								>
									<li className="py-6 text-4xl">
										<Link to="/feed">Feed</Link>
									</li>
									<li className="py-6 text-4xl">
										<Link to="/profile">Profile</Link>
									</li>
									<li className="py-6 text-4xl">
										<Link to="/friends">Friends</Link>
									</li>
									<li className="py-6 text-4xl">
										<Link to="/minigames">Mini Games</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="w-full h-80">
							<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white font-serif grid-cols-2">
								<h1 className="text-4xl">Feed</h1>
								<div className="flex grid-cols-2 gap-4">
									{/* Gaming News */}
									{/* {bot.map((newsFeed) => {
                console.log(bot)
                  return (
                <div className="card w-96 bg-neutral shadow-2xl">
                <div className="card-body">
                  <h2  className="card-title">{newsFeed.postNames}</h2>
                  <p>{newsFeed.links}</p>
                </div>
                </div>
                  );
                })} */}
									<div className="card w-96 bg-primary shadow-2xl">
										<div className="card-body">
											<h2 className="card-title">Top Gaming News</h2>
											{/* Twitch Games Being played */}
											<p>Enter Gaming News Here</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				//render login Hero
				// style={{ backgroundImage: `url("https://melmagazine.com/wp-content/uploads/2018/08/1PLZJfMY2tvncNstYR59cmw.gif")` }}
				<>
					<div className="hero min-h-screen bg-base-200">
						<div className="hero-content text-center">
							<div className="max-w-md">
								<h1 className="text-5xl font-bold text-neutral">
									GaMeR sPaCe
								</h1>
								<p className="py-6 font-bold text-neutral">
									In A wOrLd WhErE GaMeRs ArE nOt ToXiC
								</p>
								<button
									className="btn btn-primary"
									onClick={() => setShowPortal(true)}
								>
									Login/Signup
								</button>

								{/* toggle toxic, new usestate */}
								{/* <button className="btn btn-primary"
                                onClick={() =>setShowToxic(true)}>
                                    Login/Signup
                                </button> */}
								{/* hidden login/signup */}
								{showPortal ? (
									<div
										className="card w-96 bg-base-100 shadow-xl"
										style={{ opacity: 0.7 }}
									>
										<div className="card-body items-center text-center">
											<h2 className="card-title">Login/SignUp!</h2>
											{/* input SignUpForm */}
											<SignUpForm />
											<LoginForm />
										</div>
									</div>
								) : (
									<></>
								)}
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};
export default Portal;
