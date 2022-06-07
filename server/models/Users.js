const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Use a valid email address']
      },
      password: {
        type: String,
        required: true,
      },
      savedGames: [gameSchema],
      thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thought'
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

  userSchema.virtual('gameCount').get(function(){
      return this.savedGames.length;
  })

  const User = model('User', userSchema);

  module.exports = User;