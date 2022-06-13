import react, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { SEARCH_USER } from './queries'


const SearchUser = ({ handleInputChange, handleFormSubmit, searchForm }) => {


    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="username" placeholder="Search Friends" onChange={handleInputChange} defaultValue={searchForm.username} />
            <button className="btn btn-md btn-square btn-outline font-serif">Go!</button>
        </form>
    )
}
export default SearchUser;