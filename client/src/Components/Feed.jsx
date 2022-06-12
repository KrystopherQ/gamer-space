import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Gamer Space-logos_transparent.png";
import { Link } from "react-router-dom";
import api from "../utils/api";

function Feed() {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	const [bot, setBot] = useState([]);
	const [scrape, setScrape] = useState([]);
	useEffect(() => {
		api.bot().then((data) => {
			setBot(data);
		});

		api.botScraper().then((data) => {
			setScrape(data);
		});
	}, []);

	return (
		<div className="grid-rows-2">
			<div className="z-40 fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 font-serif ">
				<div>
					<img src={Logo} alt="Logo" style={{ width: "200px" }} />
				</div>
				{console.log(bot, scrape)}
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
							<Link to="/minigames">Mini Games</Link>
						</li>
						<li className="py-6 text-4xl hover:bg-neutral">
							<Link to="/searchresults">Search Results</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={nav ? "hidden" : "w-full h-80"}>
				<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white font-serif grid-cols-2">
					<h1 className="text-4xl z-40">Feed</h1>
					<div className=" absolute overflow-hidden flex flex-col grid-row-2 gap-4">
						{/* Gaming News */}
						{bot.map((newsFeed) => {
							console.log(bot);
							return (
								<div class="overflow-hidden">
									<table class="table table-compact w-full">
										<thead>
											<tr>
												<th></th>
												<th>Name</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th>-</th>
												<a href={newsFeed.link}>
													<td>{newsFeed.title}</td>
												</a>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<th></th>
												<th>Name</th>
											</tr>
										</tfoot>
									</table>
								</div>
							);
						})}
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
	);
}

export default Feed;
