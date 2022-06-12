import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Gamer Space-logos_transparent.png";
import { Link } from "react-router-dom";

//embed minigames
function MiniGames() {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div className="flex">
			<div className="nav">
				<div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 font-serif">
					<div>
						<img src={Logo} alt="Logo" style={{ width: "200px" }} />
					</div>
					<ul className="hidden md:flex">
						<li className="btn btn-ghost normal-case text-xl">
							<Link to="/feed">Feed</Link>
						</li>
						<li className="btn btn-ghost normal-case text-xl">
							<Link to="/profile">Profile</Link>
						</li>
						<li className="btn btn-ghost normal-case text-xl">
							<Link to="/friends">Friends</Link>
						</li>
						<li className="btn btn-ghost bg-neutral normal-case text-xl">
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
									: "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
							}
						>
							<li className="py-6 text-4xl hover:bg-neutral">
								<Link to="/feed">Feed</Link>
							</li>
							<li className="py-6 text-4xl hover:bg-neutral">
								<Link to="/profile">Profile</Link>
							</li>
							<li className="py-6 text-4xl hover:bg-neutral">
								<Link to="/friends">Friends</Link>
							</li>
							<li className="py-6 text-4xl hover:bg-neutral">
								<Link to="/minigames">MiniGames</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={nav ? "hidden" : "w-full h-80"}>
				<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white font-serif grid-cols-2  pt-40">
					<h1 className="text-4xl">Mini Games</h1>
					<div>
						<iframe
							width="100%"
							height="315"
							allow="fullscreen; autoplay; encrypted-media"
							src="https://games.construct.net/769/latest"
							frameborder="0"
							allowfullscreen="true"
							msallowfullscreen="true"
							mozallowfullscreen="true"
							webkitallowfullscreen="true"
							allowpaymentrequest="false"
							referrerpolicy="unsafe-url"
							sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups"
							scrolling="no"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MiniGames;
