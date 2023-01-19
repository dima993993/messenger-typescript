import Form from "../components/auth/Form";

const inputs = [
  { type: "email", name: "Email" },
  { type: "password", name: "Password" },
];

const LoginPage = () => {
  return (
    <div>
      <Form
        inputs={inputs}
        path='/registration'
        title='Login'
        nameLink='Register'
        subTitle='Sign in to continue'
        textLink="Don't have an account?"
      />
    </div>
  );
};

export default LoginPage;
