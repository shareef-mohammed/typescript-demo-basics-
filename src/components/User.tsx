import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}
const User = () => {
    const [user,setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: "shareef",
            email: "shareefmohammed@gmail.com"
        })
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <div>User name is <p>{user?.name}</p></div>
        <div>User email is <p>{user?.email}</p></div>
    </div>
  )
}

export default User