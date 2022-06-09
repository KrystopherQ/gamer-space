const {gql} =require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    password: String
    savedGames: [Game]!
    posts: [Post]
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
type Post {
    id: ID
    postText: String
    userPost: User
}
type Comments {
    id: ID
    commentText: String
    postComment: Post
}
type Auth{
    token: ID!
    user: User
}

type Link{
    title: String
    link: String
}

type Query{
    me: User
    getPostNames: Link[]
    getPostLinks: Link[]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveGame(game: saveGameToUser): User
    removeGame(gameId: ID!): User
    addPost(postText:String!): User
    addComment(commentText:String!): Post
}

`
module.exports = typeDefs;