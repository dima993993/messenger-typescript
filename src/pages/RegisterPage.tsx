import Form from "../components/auth/Form";

const inputs = [
  { type: "text", name: "Name" },
  { type: "text", name: "Surname" },
  { type: "text", name: "Email" },
  { type: "password", name: "Password" },
];

const RegisterPage = () => {
  return (
    <div>
      <Form
        inputs={inputs}
        path='/authorization'
        title='Register'
        nameLink='Sign in'
        subTitle='Get your free Doot account now'
        textLink='Already have an account?'
      />
    </div>
  );
};

export default RegisterPage;
