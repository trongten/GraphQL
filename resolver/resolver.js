const user = require('../model/userModel')
const userModel = require('../model/userModel')
const messageModel = require('../model/messageModel')
const chatModel = require('../model/chatModel')

const resolver = {

    Query: {
        users: async () => await userModel.find(),
        user: async (parent, args) => await userModel.findOne({ id: args.id }),

        messages: async () => await messageModel.find(),
       
        chat:  async ()=> await chatModel.find()
    }
    ,
    Message:{
        sender: async (parent, args) => await userModel.findById(parent.senderId),
        chat:async (parent, args) => await chatModel.findById(parent.senderId)
    }
    ,
    Chat:{
        users: async (parent, args) => await userModel.findById(parent.senderId),
        lastMessage: async (parent, args) => await messageModel.findById(parent.id),
        adminGroup : async (parent, args) => await userModel.findById(parent.id)
    },


    Mutation: {
        createUser : async (parent, args) => await userModel.create({
                name:args.name,
                email:args.email,
                password: args.email
        }),
		createMessage : async (parent, args)=>await messageModel.create({
                senderId:args.senderId,
                context:args.context,
                chatId:arg.chatId
                
        }),
		createChat :  async (parent, args)=>{}
	}

}

module.exports = resolver