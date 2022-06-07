const {User, Games, Posts, Comments} = require('../models')
const {signToken} = require('../utils/auth')
const {AuthenticationError} = require('')

const resolvers = {
    Query: {
        me: async (_parent, _arg, context) => {
            if(context.user) {
                return User.findOne({_id: context.user_id})
                .populate('savedGames')
            }
            throw new AuthenticationError('Login Please');''
        }, 
        addUser: async (_parent, {username,email,password})=>{
            const user = await User.create(
                {username, email, password})
                const token = signToken(user)
                return {token, user}
        },
        login: async (_parent, {email, password})=>{
            const user = await User.findOne({email});
            if(!user) {
                throw new AuthenticationError('No user with that email')
            }
            const correctPassword = await user.isCorrectPassword(password)
            if(!correctPassword){
                throw new AuthenticationError('incorrect password')
            }
            const token = signToken(user)
            return {token, user};
        },
        saveGame: async(_parent, {game}, context) =>{
            console.log(context.user, game) 
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user_id},
                    //may need to be game from saveGame mutation
                    {$addToSet:{savedGames:{gameId}}},
                    {new: true}
                )
                if(!updatedUser) {
                    throw new AuthenticationError('please login to save')
                }
            }
        },

        removeGame: async (_parent,{gameId}, context)=> {
            const updatedUser = await User.findOneAndUpdate(
                {_id: context.user_id},
                {$pull:{savedGames: {gameId}}},
                {new: true}
            )
            if(!updatedUser){
                throw new AuthenticationError('no game to delete')
            }
            return updatedUser
        }
    },
   
}
module.exports = resolvers;