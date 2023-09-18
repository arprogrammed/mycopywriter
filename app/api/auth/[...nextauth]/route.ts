import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import Auth0Provider from "next-auth/providers/auth0";

const handler = NextAuth({
    session: { 
        strategy: "jwt" 
    },
    providers: [
        Auth0Provider({
            name: "auth0",
            clientId: process.env.AUTH0_CLIENT_ID as string,
            clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
            issuer: process.env.AUTH0_ISSUER as string
          }),
        // CredentialsProvider({
        //     name: "credentials",
        //     credentials: {},
        //     async authorize(credentials, req) {
        //         // Add logic here to look up the user from the credentials supplied
        //         // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        //         const { email, password } = credentials as { email: string; password: string; }
                
        //         if (email !== "" || password !== "") {
        //             return null
        //         } else {
        //             const user = {id: "1", name: 'Alpha_Tester', email: '' }
        //             return user
        //         }
        //     }
        // }),
    ],
    // pages: {
    //     // signIn: '/auth/signin',
    //     // signOut: '/auth/signout'
    // }
    
})

export { handler as GET, handler as POST }