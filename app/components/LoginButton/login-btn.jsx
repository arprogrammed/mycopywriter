import { useSession, signIn, signOut } from "next-auth/react"
import styles from './component.module.css'
import { ubuntu } from "@/app/fonts";

export default function LoginButt() {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <div className={styles.btn_container}>
        <div className={styles.message}>Welcome back!</div>
        <button className={styles.button_15} onClick={() => signOut('auth0')}>Logout</button>
      </div>
    )
  }
  return (
    <div className={styles.btn_container}>
      <div className={styles.message}>Please Login</div>
      <button className={styles.button_15} onClick={() => signIn('auth0')}>Login</button>
    </div>
  )
};