"use client";

/**
 * LOGIN MODAL - Client Component
 *
 * Must be a Client Component because:
 * 1. Uses Google OAuth (requires client-side rendering)
 * 2. Manages modal open/close state
 * 3. Uses useAuth context hook
 */

import { X, Sparkles, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Check if Google OAuth is configured
const isOAuthConfigured = !!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    if (!isOAuthConfigured) {
      alert("Google OAuth is not configured. Please set NEXT_PUBLIC_GOOGLE_CLIENT_ID in your .env.local file.");
      return;
    }

    // Dynamic import to avoid errors when OAuth is not configured
    try {
      const { useGoogleLogin } = await import("@react-oauth/google");
      // Note: This is a simplified example. In production, you'd use the hook properly.
      console.log("Google login initiated");
    } catch (error) {
      console.error("Failed to load Google OAuth:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl p-8 w-full max-w-md mx-4 shadow-2xl animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
            Welcome to StudySpark
          </h2>
          <p className="text-gray-600 mb-8">
            Sign in to track your progress and access all courses
          </p>

          {/* OAuth Not Configured Warning */}
          {!isOAuthConfigured && (
            <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-left">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-800">
                    OAuth Not Configured
                  </p>
                  <p className="text-xs text-amber-700 mt-1">
                    Set <code className="bg-amber-100 px-1 rounded">NEXT_PUBLIC_GOOGLE_CLIENT_ID</code> in your <code className="bg-amber-100 px-1 rounded">.env.local</code> file to enable Google Sign-In.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Google Sign In */}
          <Button
            onClick={handleGoogleLogin}
            disabled={!isOAuthConfigured}
            className={`w-full bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl py-6 font-medium mb-4 ${
              !isOAuthConfigured ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <p className="text-xs text-gray-500">
            By signing in, you agree to our{" "}
            <a href="/terms" className="text-primary-purple hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-primary-purple hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
