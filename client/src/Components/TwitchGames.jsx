import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Gamer Space-logos_transparent.png";
import { Link } from "react-router-dom";
import api from "../utils/api";

function TwitchGames() {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
    const [twitchGames, setTwitchGames] = useState([]);
   
	useEffect(() => {
        api.twitchGames().then((data)=>{
            console.log(data)
            setTwitchGames(data);
        })
	}, []);

	return (
		<div className="grid-rows-2">
			<div className="realtive bg-gray-900 z-50 fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 font-serif">
				<div>
					<img src={Logo} alt="Logo" style={{ width: "200px" }} />
				</div>
				{console.log(twitchGames.data)}
				{/*navbar */}
				<ul className="hidden md:flex">
					<li className="btn btn-ghost bg-neutral normal-case text-xl">
						<Link to="/feed">Feed</Link>
					</li>
					<li className="btn btn-ghost normal-case text-xl">
						<Link to="/friends">Friends</Link>
					</li>
					<li className="btn btn-ghost normal-case text-xl">
						<Link to="/minigames">Mini Games</Link>
					</li>
                    <li className="btn btn-ghost normal-case text-xl">
						<Link to="/twitchgames">Twitch Games</Link>
					</li>
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
							<Link to="/friends">Friends</Link>
						</li>
						<li className="py-6 text-4xl hover:bg-neutral">
							<Link to="/minigames">Mini Games</Link>
						</li>
                        <li className="py-6 text-4xl hover:bg-neutral">
						    <Link to="/twitchgames">Twitch Games</Link>
					    </li>
					</ul>
				</div>
			</div>
			<div className={nav ? "hidden" : "w-full h-80"}>
				<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white  font-serif grid-cols-2">
					<h1 className="text-4xl pb-8 z-40">Feed</h1>
					<div className=" absolute bottom-0 flex flex-col grid-row-2 h-4/5">
						{/*TwitchGames */}
						{twitchGames.data.map((data) => {
							return (
								<div>
									<table className=" m-1 max-w-[1000px] table table-compact w-full">
										<tbody>
											<tr>
												
													<td className="bg-primary hover:bg-slate-500">
														{data.name}
													</td>
						
											</tr>
										</tbody>
									</table>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default TwitchGames;
