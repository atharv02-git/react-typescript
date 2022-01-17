import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export function User() {
  // how to typ the useState hook when the initial vlaue type is different to tne future value type
  const [user, setUser] = useState<AuthUser | null>(null);

  const loginHandler = () => {
    setUser({
      name: "Atharv",
      email: "atharv2001@gmail.com",
    });
  };

  const logoutHandler = () => {
    setUser(null)
  }

  return (
    <div>
      {!user && <button onClick={loginHandler}>Login</button>}
      {user && <button onClick={logoutHandler}>Logout</button>}
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
}
