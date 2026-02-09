"use client";

/**
 * AUTH CONTEXT - Client Component
 *
 * This must be a Client Component because:
 * 1. Uses React Context (createContext, useContext)
 * 2. Manages client-side state (useState)
 * 3. Uses localStorage for session persistence
 * 4. Handles JWT decoding on the client
 *
 * Authentication state is inherently client-side in this app.
 */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { jwtDecode } from "jwt-decode";

interface User {
  id: string;
  email: string;
  name: string;
  picture: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credential: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session in localStorage
    const savedUser = localStorage.getItem("studyspark_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        // Invalid JSON, clear it
        localStorage.removeItem("studyspark_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = (credential: string) => {
    try {
      const decoded = jwtDecode<{
        sub: string;
        email: string;
        name: string;
        picture: string;
      }>(credential);

      const userData: User = {
        id: decoded.sub,
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
      };

      setUser(userData);
      localStorage.setItem("studyspark_user", JSON.stringify(userData));
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("studyspark_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
