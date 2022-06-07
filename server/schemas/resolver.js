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
    },
   
}