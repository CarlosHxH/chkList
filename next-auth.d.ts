// next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      randomKey?: string; // Add your custom property here
    } & DefaultSession['user']; // Extend with DefaultSession properties
  }
}