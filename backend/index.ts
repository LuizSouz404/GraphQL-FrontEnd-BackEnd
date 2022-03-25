import 'reflect-metadata'

import path from "path";
import { ApolloServer } from "apollo-server";
import { UserResolver } from './src/resolvers/UserResolver';
import { buildSchemaSync } from 'type-graphql';

async function main() {
  const schema = await buildSchemaSync({
    resolvers: [
      UserResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen()

  console.log(`Server running on ${url}`)
}

main();