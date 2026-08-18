'use client';

import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { UserRole } from '@/lib/auth';

interface AuthContextValue {
  username: string;
  role: UserRole;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextValue>({
  username: 'viewer',
  role: 'viewer',
  isAdmin: false,
});

/**
 * Session comes from the server-verified cookie (passed in by the dashboard
 * layout), NOT from client storage. This keeps the displayed role authoritative
 * and tamper-resistant, and avoids server/client hydration mismatches.
 */
export function AuthProvider({
  session,
  children,
}: {
  session: { username: string; role: UserRole } | null;
  children: ReactNode;
}) {
  const value = useMemo<AuthContextValue>(() => ({
    username: session?.username || 'viewer',
    role: session?.role || 'viewer',
    isAdmin: session?.role === 'admin',
  }), [session]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  return useContext(AuthContext);
}
