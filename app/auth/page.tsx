"use client";

import { useState } from "react";
import { loginWithEmail, registerWithEmail, loginWithGoogle, loginWithFacebook, logout } from "../../src/lib/auth";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h1>Login / Register Test</h1>

      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

      <div style={{ marginTop: 10 }}>
        <button onClick={() => registerWithEmail(email, password)}>Register</button>
        <button onClick={() => loginWithEmail(email, password)}>Login</button>
        <button onClick={loginWithGoogle}>Login with Google</button>
        <button onClick={loginWithFacebook}>Login with Facebook</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}