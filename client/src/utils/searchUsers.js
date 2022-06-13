import react, {useState} from 'react'
import { useQuery } from '@apollo/client'
import { SEARCH_USER } from './queries'


const SearchUser= ({handleInputChange, handleFormSubmit, searchForm}) => {
   

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="username" placeholder="search friends" onChange={handleInputChange} defaultValue={searchForm.username}/>
            <button className="btn btn-square btn-outline font-serif"></button>
        </form>
    )
}
export default SearchUser;