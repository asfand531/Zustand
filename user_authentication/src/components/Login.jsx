import { useState } from "react";
import useAuth from "../store/store";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuth((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Fill all these inputs first.");
      return;
    }

    login({ username, email, password });

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex flex-col items-start gap-3">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="border rounded px-3 py-2"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="border rounded px-3 py-2"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="border rounded px-3 py-2"
        />
        <button onClick={handleSubmit}>Login</button>
      </div>
    </>
  );
}

export default Login;
