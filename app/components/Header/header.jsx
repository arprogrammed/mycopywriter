import Link from 'next/link';
import LoginButt from '@/app/components/LoginButton/login-btn';
import styles from '@/app/components/Header/component.module.css';
import { useSession } from 'next-auth/react';
import { kalam } from '@/app/fonts';

export default function HeaderCust(){
    const { data: session } = useSession()

    if(session) {
        return (
            <>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <Link className={kalam.className} href={'/'}>CopyWriterAI</Link>
                    <Link href={'/pages/writemycopy'}>Make Copy</Link>
                </div>
                <LoginButt />
            </div>
            <div className={styles.gradient}></div>
            </>
        )
    } else {
        return (
            <>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <Link className={kalam.className} href={'/'}>CopyWriterAI</Link>
                </div>
                <LoginButt />
            </div>
            <div className={styles.gradient}></div>
            </>
        )
    };
};


