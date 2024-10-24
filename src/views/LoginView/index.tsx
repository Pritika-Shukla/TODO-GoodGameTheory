import FormInput from '../../components/base/FormInput';
import FormButton from '../../components/base/FormButton';
import { useNavigate } from "react-router-dom";

interface LoginProps {
  email: string;
  password: string;
  onClick: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: string | null;
  loading?: boolean;
}

const LoginView = ({ 
  email, 
  password, 
  onClick, 
  handleChange, 
  className,
  error,
  loading 
}: LoginProps) => {
  const navigate = useNavigate();
  return (
    <div className={`w-full max-w-md mx-auto p-8 space-y-6 bg-white rounded-lg shadow-lg ${className}`}>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600">
          Please Log in to your account
        </p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); onClick(); }} className="space-y-4">
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="rounded-full"
          
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="rounded-full"
          
        />

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <FormButton 
          type="submit"
          onClick={onClick}
          className="rounded-full w-full"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </FormButton>
      </form>
      <p className="text-gray-400 font-semibold mb-4">
        Don't have an account?{" "}
        <span className="underline cursor-pointer " onClick={() => navigate("/")}>
          Signup
        </span>
      </p>
    </div>
  );
};

export default LoginView;
