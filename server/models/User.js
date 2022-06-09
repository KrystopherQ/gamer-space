const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Post = require('./Post')
const gameSchema = require('./Games')

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        // match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Use a valid email address']
      },
      password: {
        type: String,
        required: true,
      },
      savedGames: [gameSchema],
      posts: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    },
    {
      toJSON: {
        virtuals: true,
      },
    }
  );

  userSchema.pre('save', async function(next){
      if(this.isNew || this.isModified('password')){
          const saltRounds = 10;
          this.password = await bcrypt.hash(this.password, saltRounds)
      }
      next();
  })

  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  userSchema.virtual('gameCount').get(function(){
      return this.savedGames.length;
  })

  const User = model('User', userSchema);

  module.exports = User;