import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButt() {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <>
        <div> Signed in as {session.user.name}</div>
        <button onClick={() => signOut('auth0')}>Logout</button>
      </>
    )
  }
  return (
    <>
      <div> Please Login</div>
      <button onClick={() => signIn('auth0')}>Login</button>
    </>
  )
};