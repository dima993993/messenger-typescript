import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Form from "../components/auth/Form";
import { useAppDispatch } from "../hooks/redux-hooks";
import { setUser } from "../store/slice/userSlice";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);

        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <div>
      <Form
        path="/registration"
        title="Login"
        nameLink="Register"
        subTitle="Sign in to continue"
        textLink="Don't have an account?"
        handleClick={handleLogin}
      />
    </div>
  );
};

export default LoginPage;
