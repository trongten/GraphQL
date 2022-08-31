const mongoose = require('mongoose')
const messageModel = mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        context:{
            type:String, trim:true
        },
        chatId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Chat"
        }
    },
    {
        timestamps:true
    }
)

const Message = mongoose.model("Message",messageModel)
module.exports = Message