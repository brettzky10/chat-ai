import NextAuth, {DefaultSession} from "next-auth";


//This adds id to Session in typescript
declare module 'next-auth' {
    interface Session {
        firebaseToken?: string;
        user: {
            id: string;
        } & DefaultSession["user"]
    } 
}