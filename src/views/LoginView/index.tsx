import FormButton from "../../components/base/FormButton";
import FormInput from "../../components/base/FormInput";

type LoginProps = {
  type: string;
  email: string;
  password: string;
  onClick: () => void;
  handleChange: (e?: any) => void; 
};

const LoginView = ({ email, password, onClick, handleChange }: LoginProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-gray-900">
        Welcome Back
      </h1>
      <p className="text-center text-gray-600">Please sign in to your account</p>
      <FormInput
        type="text"
        name="email"
        value={email}
        onChange={handleChange} 
        placeholder="Email"
      />
      <FormInput
        type="password"
        name="password"
        value={password}
        onChange={handleChange} 
        placeholder="password"
      />
      <FormButton onClick={onClick}>Login</FormButton>
    </div>
  );
};
export default LoginView;