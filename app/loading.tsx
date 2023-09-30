import styles from '@/app/component.module.css'

export default function Loading() {
    return (
        <div className={styles.load_container}>
            <span className={styles.loader}></span>
        </div>
    );
};