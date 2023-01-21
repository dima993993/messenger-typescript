import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";
import { setUser } from "../store/slice/userSlice";
import Form from "../components/auth/Form";

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const hendleRegistration = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
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
        path="/authorization"
        title="Register"
        nameLink="Sign in"
        subTitle="Get your free Doot account now"
        textLink="Already have an account?"
        handleClick={hendleRegistration}
      />
    </div>
  );
};

export default RegisterPage;
