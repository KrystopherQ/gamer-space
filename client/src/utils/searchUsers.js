import react, {useState} from 'react'
import { useQuery } from '@apollo/client'
import { SEARCH_USER } from './queries'


const SearchUser= () => {
    const [searchForm, setSearchForm] = useState({username: ''})
    const search = useQuery(SEARCH_USER)
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setSearchForm({...searchForm, [name]: value})
    }

    const handleFormSubmit= async (event) => {
        event.preventDefault();


        try {

            const {data} = await search({
                variables: {...searchForm}
            });

        } catch (err) {
            console.error(err);
        }
        setSearchForm({
            username: '',
        })
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="username" placeholder="search friends" onChange={handleInputChange} defaultValue={searchForm.username}/>
        </form>
    )
}
export default SearchUser;