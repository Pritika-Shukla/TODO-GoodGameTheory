import FormButton from "../../components/base/FormButton";
import FormInput from "../../components/base/FormInput";

type SignUpProps = {
  email: string;
  password: string;
  confirmPassword: string;
  onClick: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SignUpView = ({
  email,
  password,
  handleChange,
  onClick,
}: SignUpProps) => {
  return (
    <div>
      <FormInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      <FormInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />
      <FormButton onClick={onClick}>Signup</FormButton>
    </div>
  );
};

export default SignUpView;
