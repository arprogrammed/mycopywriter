import Link from 'next/link';
import LoginButt from '@/app/components/LoginButton/login-btn';
import styles from '@/app/components/Header/component.module.css';
import { useSession } from 'next-auth/react';

export default function HeaderCust(){
    const { data: session } = useSession()

    if(session) {
        return (
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/pages/writemycopy'}>Make Copy</Link>
                </div>
                <LoginButt />
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <Link href={'/'}>Home</Link>
                </div>
                <LoginButt />
            </div>
        )
    };
};


