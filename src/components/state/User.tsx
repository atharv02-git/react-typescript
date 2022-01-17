import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export function User() {
    const [user, setUser] = useState<AuthUser | null>(null)

    const loginHandler = () => {
     setUser({
         name: 'Atharv',
         email: 'atharv2001@gmail.com'
     })   
    }
    const logoutHandler = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={loginHandler}>Login</button>
            <button onClick={logoutHandler}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}
