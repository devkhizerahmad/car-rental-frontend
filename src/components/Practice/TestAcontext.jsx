import { useContext } from "react";
import React from "react";
import UserContext from "../../context/UserContext";

function TestAcontext() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username:", username, "password", password);
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login in Context A</h2>
      <input
        className="text-black border-gray-500 rounded-md p-2 m-2"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      {""}
      <input
        type="password"
        className="text-black border-gray-500 rounded-md p-2 m-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <button
        className="border border-gray-500 rounded-md p-2 m-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default TestAcontext;
