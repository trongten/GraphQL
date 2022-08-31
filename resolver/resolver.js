const user = require('../model/userModel')
const userModel = require('../model/userModel')
const messageModel = require('../model/messageModel')
const chatModel = require('../model/chatModel')

const resolver = {

    Query: {
        users: async () => await userModel.find(),
        user: async (parent, args) => await userModel.findOne({ id: args.id }),

        messages: async () => await messageModel.find(),
       
        chats:  async ()=> await chatModel.find()
    }
    ,
    Message:{
        sender: async (parent, args) => await userModel.findById(parent.senderId),
        chat:async (parent, args) => await chatModel.findById(parent.senderId)
    }
    ,
    Chat:{
        users: async ({usersId}, args) => await findAd(usersId),
        lastMessage: async (parent, args) => await messageModel.findById(parent.id),
        adminGroup : async ({adminGroupId}, args) => await findAd(adminGroupId)
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
		createChat :  async (parent, args)=>await chatModel.create({
            chatName:args.chatName,
            isGroupChat:args.isGroupChat,
            users:args.users,
            lastMessage:args.lastMessage,
            adminGroupId:args.adminGroupId
        })
	}

}

function findAd(parent) {
  var a = new Array()
  for ( i = 0; i < parent.length; i++){
    a.push(userModel.findById(parent[i]))
    }

 
  return a;
}




module.exports = resolver