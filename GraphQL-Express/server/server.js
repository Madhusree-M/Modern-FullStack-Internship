import express from 'express'
import cors from "cors"

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";


const PORT = 5000;
const app = express();

const users = [
    {
        id: 1,
        name: "Madhu",
        email: "madhu@gmail.com",
        phone: '9659013590'
    },
    {
        id: 3,
        name: "Harshini",
        email: "harsh@gmail.com",
        phone: '9361159306'
    },
    {
        id: 1,
        name: "Mathu",
        email: "mathu@gmail.com",
        phone: '9751227212'
    },
]

async function startServer()
{
    // create apollo server
    const server = new ApolloServer({
        typeDefs:`
            type User{
                id: ID!
                name: String!
                email: String!
                phone: String!
            }
            type Query{
                getUsers : [User]
            } 

            type Mutation{
                createUser(id: ID!, name:String!, email:String!, phone:String!):User
                deleteUser(id:ID!): User
                updateUser(id:ID!,email: String!): User
            }
            `,

            resolvers: {
                Query: {
                    getUsers: () => users
                },

                Mutation: {
                    createUser: (parent, {id, name, email, phone}) => {
                        const newUser = {
                            id: users.length+1,
                            name,
                            email,
                            phone
                        }
                        users.push(newUser);
                        return newUser;
                    },

                    updateUser: (_,{id, email}) => {
                        const user = users.find((user) => 
                            {
                                return user.id === id
                            });

                        if(!user)
                        {
                            throw new Error(`No user with ${id} exists`);
                        }
                        user.email = email;
                        return user;
                    },
                    deleteUser: (_,{id}) => {
                        const filtered_users = users.filter((user) => {
                            return user.id !== id;
                        })

                        const final = [...users,...filtered_users];
                        return final;
                    }
                }
            }
            
        })
        await server.start();
        app.use(express.json())
        
        app.use(cors());
        
        app.use("/graphql",expressMiddleware(server));
        
        app.listen(PORT, () => {
            console.log(`Server started at ${PORT}`)
        })
}

startServer();
