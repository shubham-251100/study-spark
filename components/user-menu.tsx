"use client";

/**
 * USER MENU - Client Component
 *
 * Must be a Client Component because:
 * 1. Uses useAuth hook (client-side context)
 * 2. Manages dropdown state
 * 3. Handles logout action
 */

import { useState } from "react";
import Image from "next/image";
import { LogOut, User, Settings } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";

interface UserMenuProps {
  onOpenLogin: () => void;
}

export function UserMenu({ onOpenLogin }: UserMenuProps) {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          onClick={onOpenLogin}
          className="text-gray-700 hover:text-primary-purple"
        >
          Sign In
        </Button>
        <Button
          onClick={onOpenLogin}
          className="bg-gradient-brand text-white rounded-xl px-6 font-medium"
        >
          Get Started
        </Button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
      >
        {user?.picture ? (
          <Image
            src={user.picture}
            alt={user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-50">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="font-medium text-gray-900">{user?.name}</p>
              <p className="text-sm text-gray-500 truncate">{user?.email}</p>
            </div>

            <div className="py-2">
              <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3">
                <User className="w-4 h-4" />
                My Profile
              </button>
              <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3">
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>

            <div className="border-t border-gray-100 pt-2">
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-3"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
