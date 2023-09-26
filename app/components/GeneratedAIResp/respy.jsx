'use client'
import {useSession} from 'next-auth/react';
import { Link } from 'next';

export default function AIGen({ respy }) {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
                <div>
                    <textarea id="aiText" defaultValue={`${respy}`}>
                    </textarea>
                </div>
            </>
        );
    } else {
        return (
            <main className={styles.main}>
                <div>
                    <Link href={'/auth/signin'}>Please Login</Link>
                </div>
            </main>
        );
    };
};

