import styles from '@/app/components/Footer/component.module.css';
import { useSession } from 'next-auth/react';
import { kalam } from '@/app/fonts';

export default function FooterCust(){
    const { data: session } = useSession()

    if(session) {
        return (
            <div className={styles.stick}>
                <div className={styles.gradient}></div>
                <div className={styles.container}>
                    <p className={kalam.className}>DBA CopyWriterAI&#169; 2023</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.stick}>
                <div className={styles.gradient}></div>
                <div className={styles.container}>
                    <p className={kalam.className}>DBA CopyWriterAI&#169; 2023</p>
                </div>
            </div>
        )
    };
};


