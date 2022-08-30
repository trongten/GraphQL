const mongoose = require('mongoose')
const userModel = mongoose.Schema({
    name:{type:String, require: true},
    email:{type:String, require: true},
    password:{type:String, require: true},
    pic:{type:String, require: true,
        default:"https://images1.content-hci.com/commimg/myhotcourses/blog/post/myhc_94121.jpg"
    }
})

const user = mongoose.model("User",userModel)
module.exports = user