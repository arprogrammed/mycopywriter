'use client'

import React from "react";
import { SessionProvider } from "next-auth/react";

// This wrapper is for keeping the session constant and in useSession.
const AuthProvider = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return <SessionProvider>{children}</SessionProvider>
};

export default AuthProvider;