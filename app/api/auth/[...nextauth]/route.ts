import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Correctly import authOptions

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
