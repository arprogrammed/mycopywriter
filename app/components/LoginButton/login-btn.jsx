import { useSession, signIn, signOut } from "next-auth/react"
import Button from '@mui/material/Button';

export default function LoginButt() {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <>
        <div> Signed in as {session.user.name}</div>
        <Button variant="contained" onClick={() => signOut('auth0')}>Logout</Button>
      </>
    )
  }
  return (
    <>
      <div> Please Login</div>
      <Button variant="contained" onClick={() => signIn('auth0')}>Login</Button>
    </>
  )
};