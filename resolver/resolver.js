const user = require('../model/userModel')
const userModel = require('../model/userModel')
const messageModel = require('../model/messageModel')
const chatModel = require('../model/chatModel')

const resolver = {

    Query: {
        users: async () => await userModel.find(),
        user: async (parent, args) => await userModel.findOne({ name: args.name }),

        messages: async () => await messageModel.find(),
       
        chat:  async ()=> await chatModel.find()
    }
}

module.exports = resolver