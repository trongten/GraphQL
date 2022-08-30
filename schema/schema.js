const {gql} = require('apollo-server-express')

const  typeDefs = gql`
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
        adminGroup:User
    }


    type Query{
        user(name:String):User
        users:[User]

        message:Message
        messages:[Message]

        chat:Chat
        chats:[Chat]
    }
`
module.exports= typeDefs