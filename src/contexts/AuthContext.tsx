import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";
import { SignInRepository } from '../domain/repositories/users/signin/signin'

type User = {
  id: string;
  name: string | null;
  avatar: string | null;
}

type AuthContextType = {
  user: User | undefined;
  signIn: (username: string, password: string) => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  async function signIn(username: string, password: string) {

    const signInRepository = new SignInRepository({
      email: username,
      password
    })
    const result = await signInRepository.handle()

    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}