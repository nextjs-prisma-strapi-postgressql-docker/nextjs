import pool from "@/libs/postgresqlConnection";
import type { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const findUser = async (email: string) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.next_users WHERE email = $1",
      [email]
    );

    return result.rows[0];
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (user: User) => {
  const { name, email, image } = user;

  try {
    const newUser = await pool.query(
      "INSERT INTO public.next_users(name, email, image) VALUES($1, $2, $3)",
      [name, email, image]
    );

    return newUser.rows[0];
  } catch (error) {
    console.error(error);
  }
};

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/auth/sign-in",
  },

  callbacks: {
    async signIn({ user }) {
      const { email } = user;

      if (email) {
        const isUserExist = await findUser(email);

        if (isUserExist) {
          return true;
        } else {
          const newUser = await createUser(user);
          console.log("🚀 ~ signIn ~ newUser:", newUser);

          if (newUser) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    },
    redirect: async ({ url, baseUrl }) => {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};
