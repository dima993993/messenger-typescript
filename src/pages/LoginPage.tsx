import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../components/auth/Form";

const inputs = [
  { type: "email", name: "Email" },
  { type: "password", name: "Password" },
];

const LoginPage = () => {
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };

  return (
    <div>
      <Form
        inputs={inputs}
        path='/registration'
        title='Login'
        nameLink='Register'
        subTitle='Sign in to continue'
        textLink="Don't have an account?"
        handleCLick={handleLogin}
      />
    </div>
  );
};

export default LoginPage;
