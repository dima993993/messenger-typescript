import { useAuthorization } from "../hooks/auth-user";
import Form from "../components/auth/Form";

const LoginPage = () => {
  const { handleLogin } = useAuthorization();
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
