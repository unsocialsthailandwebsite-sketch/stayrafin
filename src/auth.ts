import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                // Simple secure check for MVP
                // In production, fetch user from Sanity or DB
                const adminEmail = "admin@stayra.in"
                const adminPassword = "password123" // Change this!

                if (credentials.email === adminEmail && credentials.password === adminPassword) {
                    return {
                        id: "1",
                        name: "Stayra Admin",
                        email: adminEmail,
                        role: "admin"
                    }
                }
                return null
            },
        }),
    ],
    pages: {
        signIn: '/admin/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                (session.user as any).role = token.role;
            }
            return session;
        }
    }
})
