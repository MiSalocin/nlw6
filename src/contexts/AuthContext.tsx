import React, { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

type authContextType = {
    user: user | undefined;
    signInWithGoogle: () => Promise<void>;
}

type user = {
    id: string,
    name: string,
    avatar: string

}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as authContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState<user>()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, photoURL, uid } = user

                if (!displayName || !photoURL) {
                    throw new Error('missing information from Google Account')
                }

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

    async function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();

        const result = await auth.signInWithPopup(provider);

        if (result.user) {
            const { displayName, photoURL, uid } = result.user

            if (!displayName || !photoURL) {
                throw new Error('missing information from Google Account')
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }
    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
}