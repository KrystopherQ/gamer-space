import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Gamer Space-logos_transparent.png";
import { Link } from "react-router-dom";
import SearchUser from "../utils/searchUsers";
import { useQuery } from '@apollo/client'
import { SEARCH_USER } from '../utils/queries'


//page for friend functionality
//search bar can query friend
function Friends() {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	const [results, setResults] = useState([])
    const [searchForm, setSearchForm] = useState({username: ''})
    const {loading,data} = useQuery(SEARCH_USER)
    const search = data?.getUsers.users || []
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        console.log(value)
        setSearchForm({...searchForm, [name]: value})
    }
    const handleFormSubmit= async (event) => {
        event.preventDefault();
            console.log(search)
            const newSearch = search.filter(result => result.username.toLowerCase().includes(searchForm.username.toLowerCase()))

        console.log(newSearch)
        setResults(newSearch)
       
        setSearchForm({
            username: '',
        })
    }
	return (
		<div className="flex">
			<div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 font-serif ">
				<div>
					<img src={Logo} alt="Logo" style={{ width: "200px" }} />
				</div>

				{/*navbar */}
				<ul className="hidden md:flex">
					<li className="btn btn-ghost normal-case text-xl">
						<Link to="/feed">Feed</Link>
					</li>
					<li className="btn btn-ghost normal-case text-xl">
						<Link to="/profile">Profile</Link>
					</li>
					<li className="btn btn-ghost bg-neutral normal-case text-xl">
						<Link to="/friends">Friends</Link>
					</li>
					<li className="btn btn-ghost normal-case text-xl">
						<Link to="/minigames">Mini Games</Link>
					</li>
					<div className="form-control">
						<SearchUser  handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} searchForm={searchForm}/>
					</div>
					
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
				<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white  font-serif grid-cols-2">
					<h1 className="text-4xl pb-8 z-40">Feed</h1>
					<div className=" absolute bottom-0 flex flex-col grid-row-2 h-4/5">
						<div>
							<table className=" m-1 max-w-[1000px] table table-compact w-full">
								<tbody>
									{results.map(result=>{
										return (
											<tr>
										<a>
											<td className="bg-primary hover:bg-slate-500">
												{result.username}
											</td>
										</a>
									</tr>
										)
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Friends;
