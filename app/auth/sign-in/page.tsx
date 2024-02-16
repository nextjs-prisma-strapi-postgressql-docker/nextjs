"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SignIn = () => {
  return (
    <div className="mx-auto max-w-96">
      <h1 className="mb-5 text-center text-xl">Sign In </h1>
      <div className="rounded-md p-5 shadow-lg">
        <button
          className="w-full rounded-md border bg-white p-3 transition-all hover:bg-black hover:text-white"
          onClick={() => signIn("google")}>
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
