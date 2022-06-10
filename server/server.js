const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const path = require('path')
const {typeDefs, resolvers} = require('./schemas')
const db = require('./config/connection')
const {authMiddleware} = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
})

app.use(express.urlencoded({extended: false}));
app.use(express.json())
///
require('dotenv').config();
const request = require('request')
//function runAPI() {
 const getToken = (url, callback) => {
    const options ={
        url:process.env.GET_TOKEN,
        json: true,
        body:{
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: 'client_credentials'
        }
    }
    request.post(options, (err,res,body)=>{
        if(err){
            return console.log(err)
        }
        //console.log('status: ${res.statusCode')
        //bearer is body
        console.log(body)
        callback(res);
    });
};
 var AT= '';
getToken(process.env.GET_TOKEN,(res)=>{
    //console.log(res)
    AT = res.body.access_token;
    return AT;
})
app.get('/api/games', (req,res)=>{
    setTimeout(() =>{
        getGames(res, process.env.GET_GAMES, AT,(response) =>{
            console.log(response)
        } )
    }, 1000)
   // res.json({message: 'success'})
})
const getGames = (res, url,accessToken,callback) => {
    const gameOptions = {
        url: process.env.GET_GAMES,
        method: 'GET',
        headers: {
            'Client-ID': process.env.CLIENT_ID,
            'Authorization': 'Bearer '+ accessToken
        }
    };
    request.get(gameOptions,(err, response, body)=>{
       // var gameData = res.body
        var gameInfo = JSON.parse(response.body)
        console.log(gameInfo)
        res.json(gameInfo)
        //console.log(gameInfo.data[0].name)   
    })
}
// }
///
//for production build
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
} 
const startApolloServer = async(typeDefs, resolvers) => {
    await server.start();

    server.applyMiddleware({app})
    db.once('open', ()=>{
        app.listen(PORT,()=>console.log(`🌍 Now listening on localhost:${PORT}`));
        //graphql path
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
}
startApolloServer(typeDefs, resolvers);
