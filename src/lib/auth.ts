import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaClient } from "@prisma/client"
 
const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
    })],
    callbacks: {
        async signIn({ account, profile }) {
            if (!profile?.email) {
                return false
            }
            await prisma.user.upsert({
                where: { email: profile.email },
                create: {
                    email: profile.email,
                    name: profile.name,
                },
                update: {
                    name: profile.name,
                },
            })
            return true
        },
    },
})