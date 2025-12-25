import { auth } from "./Practice/FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function LoginWithGoogle() {
  const handleGoolgeHubLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(result);
      console.log("user info", user);
      console.log("token", token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleGoolgeHubLogin}>Login With Google</button>
    </>
  );
}

export default LoginWithGoogle;
