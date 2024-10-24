import FormButton from "../../components/base/FormButton";
import FormInput from "../../components/base/FormInput";
import { useNavigate } from "react-router-dom";

type SignUpProps = {
  email: string;
  password: string;
  confirmPassword: string;
  onClick: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const SignUpView = ({
  email,
  password,
  handleChange,
  className,
  onClick,
}: SignUpProps) => {
  const navigate = useNavigate();
  return (
    <div className={`w-full max-w-md mx-auto p-8 space-y-6 bg-white rounded-lg shadow-lg ${className}`}>
    <div className="space-y-2">
      <h1 className="text-3xl font-bold text-center text-gray-900">
        Welcome 
      </h1>
      <p className="text-center text-gray-600">
        Please Signup to your account
      </p>
    </div>

    <div className="space-y-4">
      <FormInput
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email"
        className='rounded-full'
      />

      <FormInput
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
        className='rounded-full'
      />

      <FormButton 
        onClick={onClick}
        className='rounded-full w-full' >
        Signup
      </FormButton>
    </div>
    <p className="text-gray-400 font-semibold mb-4">
        Already have an account?{" "}
        <span className="underline cursor-pointer " onClick={() => navigate("/login")}>
          Login
        </span>
      </p>
  </div>
);
};

export default SignUpView;
