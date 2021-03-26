const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        greeting: String
    }
`;

 const resolvers = {
     Query: {
         greeting: () => 'Hello!'
     }
 };


const server = new ApolloServer({typeDefs, resolvers});
server.listen({port: 9001})
.then(({url}) => console.log(`Server running at ${url}`));


