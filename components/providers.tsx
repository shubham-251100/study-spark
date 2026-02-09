"use client";

/**
 * PROVIDERS - Client Component
 *
 * This is a Client Component because:
 * 1. GoogleOAuthProvider requires client-side rendering for OAuth flow
 * 2. AuthProvider uses React Context which requires client-side state
 * 3. These providers need to wrap the entire app for global state access
 *
 * All auth and OAuth functionality must run on the client.
 */

import { ReactNode } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "@/lib/auth-context";
import { Toaster } from "@/components/ui/sonner";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // Google Client ID from environment variable
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  // If no Google Client ID, render without OAuth provider
  // This allows the app to work during development without OAuth setup
  if (!googleClientId) {
    return (
      <AuthProvider>
        {children}
        <Toaster position="bottom-right" />
      </AuthProvider>
    );
  }

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <AuthProvider>
        {children}
        <Toaster position="bottom-right" />
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}
