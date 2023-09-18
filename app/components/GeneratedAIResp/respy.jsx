'use client'
import {useSession} from 'next-auth/react';

export default function AIGen({ respy }) {
    const { data: session } = useSession()
    const copyText = () => {
        navigator.clipboard.writeText(`${respy}`)
    };

    if (session) {
        return (
            <>
                <div>
                    <button id="aiCopybtn" href={copyText()}>Copy Text</button>
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

