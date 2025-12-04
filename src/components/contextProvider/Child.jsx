
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function Child() {
  const user = useContext(UserContext);
  return <h1>{user.name}</h1>;
}
export default Child;
