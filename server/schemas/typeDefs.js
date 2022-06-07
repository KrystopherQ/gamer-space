const {gql} =require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    password: String
    gameCount: Int
    savedGames: [Game]!
}
type Game {
    gameId: ID
    name: String
    box_art_url: String

}
input saveGameToUser {
    gameId: String
    name: String
    box_art_url: String
}
type: Posts {
    postText: String
    username: [User]
}
type Auth{
    token: ID!
    user: User
}

type Query{
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveGame(game: saveGameToUser): User
    removeGame(gameId: ID!): User
}

`