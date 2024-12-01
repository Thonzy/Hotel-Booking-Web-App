const graphql = require('graphql')
const Query = require('./Query')
const Mutation = require('./Mutation')

const {GraphQLSchema} = graphql

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
})