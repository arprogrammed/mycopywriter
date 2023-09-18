'use client'
import { NextPage } from "next";
import { signIn, signOut } from 'next-auth/react';
import { useSession } from "next-auth/react";
import React from 'react';
import styles from './page.module.css';
import Link from "next/link";

const SignIn: NextPage = (): JSX.Element => {
    const { data: session } = useSession()

    const handleClick = () => {
        signOut();
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("auth0", { email, password });
    };

    if (session) {
        return (
            <div>
                <main className={styles.main}>
                    <div>
                        <h1>You Are Already Signed In As {session.user?.name}</h1>
                        <button onClick={handleClick}>Logout</button>
                        <Link href={'/pages/writemycopy'}>Proceed to WriteMyCopy</Link>
                    </div>
                </main>
            </div>
        );
    } else {
        return (
            <div>
                <main className={styles.main}>
                    <div>
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <input type='email' placeholder="email" required />
                            <input type='password' placeholder="password" required />
                            <input type='submit' value="Login" />
                        </form>
                    </div>
                </main>
            </div>
        );
    };
};

export default SignIn;