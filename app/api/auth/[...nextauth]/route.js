import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/prisma/prismaClient";
import bcrypt from 'bcrypt';
import { PrismaAdapter } from "@next-auth/prisma-adapter"


export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      
      async authorize(credentials, req) {

        const user = await prisma.user.findUnique({
          where : {
            email : credentials.email
          }
        })
        if (user){
          const passwordMatches = await bcrypt.compare(credentials?.password, user.password);
          console.log(credentials.password, user.password, passwordMatches);
          if(passwordMatches){
            return user;
          }
        }

        return null;
      }
    })
  ],
  session: { strategy: "jwt" }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
