'use client'
import { useSession } from 'next-auth/react';
import { Link } from 'next/link';
import styles from '@/app/components/ModelForms/component.module.css'

export default function AIGen({ respy }) {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
                <div className={styles.resp}>
                    <textarea id="aiText" value={respy} readOnly={true}>
                    </textarea>
                </div>
            </>
        );
    } else {
        return (
            <main>
                <div>
                    <p>Please login to use this page.</p>
                </div>
            </main>
        );
    };
};

