import {gql} from '@apollo/client'

export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`
export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }
    }
  ` 
export const SAVE_GAME = gql `
        mutation saveGame($gameToSave: saveGameToUser) {
            saveGame(game: $gameToSave){
                _id
                username
                email
                savedGames {
                    gameId
                    name
                    box_art_url
                }
            }
        }
` 
export const REMOVE_GAME = gql `
        mutation removeGame($gameId: ID) {
            removeGame(gameId: $gameId){
                _id
                username
                email
                password
                bookCount
                savedGame{
                    gameId
                    name
                    box_art_url
                }
            }
        }
`