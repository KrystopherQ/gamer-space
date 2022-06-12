import react, {useState} from 'react'
import { useQuery } from '@apollo/client'
import { SEARCH_USER } from './queries'


const searchUser= () => {
    const [searchForm, setSearchForm] = useState({username: ''})
    const [search] = useQuery(SEARCH_USER)
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setSearchForm({...searchForm, [name]: value})
    }

    const handleFormSubmit= async (event) => {
        event.preventDefault();


        try {

            const {data} = await search({
                variables: {...userFormData}
            });

        } catch (err) {
            console.error(err);
        }
        setSearchForm({
            username: '',
        })
    }

    return ()
}
export default searchUsers;