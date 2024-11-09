import { GoogleAuthProvider } from "firebase/auth/web-extension";

const Login = () => {
  const handleGoogleSignIn = () => {

    const provider = new GoogleAuthProvider();
    console.log("google coming soon");
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
    </div>
  );
};

export default Login;
