const {ApolloServer}= require("apollo-server")
const {db} = require("./db")
const {Mutation} =require ("./resolvers/Mutation")
const {Category}= require("./resolvers/Category")
const {Product} = require("./resolvers/Product")
const {Query}= require ("./resolvers/Query")
const {typeDefs}= require("./schema")



const server = new ApolloServer({typeDefs,
    resolvers:{
      Mutation,
      Category,
      Product,
      Query
    },
    context:{
        db
    }
})


server.listen().then(({url})=>{
    console.log(`Server is listening at port ${url}`)
})