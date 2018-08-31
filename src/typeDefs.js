import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Mutation {
        uploadFile(id: ID!, file: Upload!): [File]
    }

    type Query {
        hello: String
    }

    type File {
        id: ID!
        success: Boolean!
        location: String!
        filename: String!
        mimetype: String
        encoding: String
    }
`;