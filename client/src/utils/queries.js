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