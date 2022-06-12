import {gql} from '@apollo/client'

export const GET_ME = gql `
    query me {
        me {
            _id
            username
            email
            password
            savedGames{
                gameId
                name
                box_art_url
            }
            posts{
                id
                postText:String
            }
        }
    }`

export const SEARCH_USER = gql `
query getUsers{
    getUsers(search: "", page: 1, limit:5){
      currentPage
      totalPages
      users{
        username
      }  
  }
  }
  
`