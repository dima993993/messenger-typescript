import { useAuthorization } from "../hooks/auth-user";
import Form from "../components/auth/Form";

const RegisterPage = () => {
  const { handleRegistration } = useAuthorization();
  return (
    <div>
      <Form
        path="/authorization"
        title="Register"
        nameLink="Sign in"
        subTitle="Get your free Doot account now"
        textLink="Already have an account?"
        handleClick={handleRegistration}
      />
    </div>
  );
};

export default RegisterPage;
