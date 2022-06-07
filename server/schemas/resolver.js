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
        }
        addUser: async (_parent, {username,email,password})=>{
            const user = await User.create(
                {username, email, password})
                const token = signToken(user)
                return {token, user}
        },
    },
   
}