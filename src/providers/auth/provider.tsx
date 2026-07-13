"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import {
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
  type User,
} from "firebase/auth";

import { ALLOWED_EMAIL_DOMAIN, auth, googleProvider } from "@/lib/firebase";

import { AuthContext } from "./context";

function isAllowedEmail(email: string | null | undefined) {
  if (!email) return false;
  return email.toLowerCase().endsWith(`@${ALLOWED_EMAIL_DOMAIN}`);
}

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser && !isAllowedEmail(currentUser.email)) {
        await firebaseSignOut(auth);
        setUser(null);
        setError(`Access restricted to @${ALLOWED_EMAIL_DOMAIN} accounts.`);
        setLoading(false);
        return;
      }

      setUser(currentUser);
      setError(null);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = useCallback(async () => {
    setError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (!isAllowedEmail(result.user.email)) {
        await firebaseSignOut(auth);
        setError(`Access restricted to @${ALLOWED_EMAIL_DOMAIN} accounts.`);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to sign in.";
      setError(message);
    }
  }, []);

  const signOut = useCallback(async () => {
    setError(null);
    try {
      await firebaseSignOut(auth);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to sign out.";
      setError(message);
    }
  }, []);

  const value = useMemo(
    () => ({ user, loading, error, signIn, signOut }),
    [user, loading, error, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
