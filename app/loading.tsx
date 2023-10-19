import styles from '@/app/component.module.css'

// Loading effect module purse css
export default function Loading() {
    return (
        <div className={styles.load_container}>
            <span className={styles.loader}></span>
        </div>
    );
};