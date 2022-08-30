const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

//MongoDB
const mongoose = require("mongoose")


//ApolloServer
const server = new ApolloServer({
	typeDefs,
	resolvers
})

//ConnectDB
const ConnectDB = async ()=>{
	try {
		await mongoose.connect('mongodb+srv://trongtrong099:Trong123@cluster0.krj5fiu.mongodb.net/?retryWrites=true&w=majority',{
			
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log('MongoDB connected!!')
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}

ConnectDB()

const app = express();
server.start().then(res => {

 server.applyMiddleware({ app });
 app.listen({ port: 3000 }, () =>
     console.log('Now browse to http://localhost:3000' + server.graphqlPath)
 )
})
