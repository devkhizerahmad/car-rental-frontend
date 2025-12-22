import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function TestBcontext() {
  const { user } = useContext(UserContext);
  console.log("User in TestBcontext:", user);

  if (!user) return <div>Please log in to see user information.</div>;
  return (
    <div className="text-black">
      <h2>User Information in Context B after login</h2>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  );
}

export default TestBcontext;
