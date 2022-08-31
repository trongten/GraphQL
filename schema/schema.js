const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User{
        id:ID
        name:String
        email:String
        password:String
        pic:String
    }

    type Message{
        id:ID
        sender: User
        context: String
        chat: Chat
    }

    type Chat{
        id:ID
        chatName:String
        isGroupChat:Boolean
        users:[User]
        lastMessage: Message
        adminGroup:[User]
    }


    type Query{
        user(id:ID!):User
        users:[User]

        message:Message
        messages:[Message]

        chat:Chat
        chats:[Chat]
    }

    type Mutation {
        createUser(name:String,email:String,password:String) : User
		createMessage(senderId: ID, context: String,chatId:ID): Message
		createChat( chatName:String,
        isGroupChat:Boolean,
        users:[ID],
        lastMessage: ID,
        adminGroupId:ID): Chat
	}
`
module.exports = typeDefs