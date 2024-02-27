import { getServerSession } from "next-auth";

import React from "react";
import { redirect } from "next/navigation";
import AuthCard from "./AuthCard";

const SignIn = async () => {
  const session = await getServerSession();
  console.log("🚀 ~ SignIn ~ session:", session);

  if (session) redirect("/");

  return (
    <div className="h-[calc(100vh-104px)] flex items-center justify-center">
      <AuthCard />
    </div>
  );
};

export default SignIn;
