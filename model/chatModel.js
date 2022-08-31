const mongoose = require('mongoose')
const chatModel = mongoose.Schema(
    {
        chatName:{type:String, trim:true},
        isGroupChat:{type:Boolean, default:false},
        usersId:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        }],
        lastMessageId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Message"
        },
        adminGroupId:[{
            type: mongoose.Schema.Types.ObjectId ,
            ref:"User"         
        }],

    },
    {
        timestamps:true,
    }
)

const Chat = mongoose.model("Chat",chatModel)

module.exports = Chat