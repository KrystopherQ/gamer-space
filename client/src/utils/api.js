require('dotenv').config();
const request = require('request')

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
        //console.log(body)
        callback(res);
    });
};

 var AT= '';

getToken(process.env.GET_TOKEN,(res)=>{
    //console.log(res)

    AT = res.body.access_token;
    return AT;
})

const getGames = (url,accessToken,callback) => {
    const gameOptions = {
        url: process.env.GET_GAMES,
        method: 'GET',
        headers: {
            'Client-ID': process.env.CLIENT_ID,
            'Authorization': 'Bearer '+ accessToken
        }
    };
    request.get(gameOptions,(req, res, body)=>{
        var data = res.body
        
        var gameData = res.body
        var games = gameData.map(i=>i.name)
        // const gameCollection = [].concat(...games)
        // console.log(gameCollection)
        //console.log('Status: ${res.statusCode}')
        //console.log(res)
        //data and games 
        //console.log(JSON.parse(res.body))
        console.log(JSON.parse(res.body))
    
        
        
    })
}

setTimeout(() =>{
    getGames(process.env.GET_GAMES, AT,(response) =>{

    } )
}, 1000)
