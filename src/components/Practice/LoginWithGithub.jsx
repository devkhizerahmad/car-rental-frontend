import { auth } from "./Practice/FirebaseConfig";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";

function LoginWithGithub() {
  const handleGitHubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
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
      <button onClick={handleGitHubLogin}>Login With Github</button>
    </>
  );
}

export default LoginWithGithub;
