var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

// GraphQL schema is the structure of requests + responses
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver is the implementation of the schema
var root = {
    message: () => 'Hello World!'
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

// graphql schema, root resolver?