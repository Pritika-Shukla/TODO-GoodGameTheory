import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpView from "../../views/SignUpView";
import { signUp } from "../../contexts/AuthContext";

const SignupContainer = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const { email, password } = signupForm;
    setLoading(true);
    setError(null);

    try {
      await signUp({ email, password });
      navigate("/home");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      setError(errorMessage);
      console.error("Signup failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="  flex justify-center items-center mx-auto h-screen">
      <SignUpView
        email={signupForm.email}
        password={signupForm.password}
        handleChange={handleChange}
        onClick={handleSubmit}
        //@ts-ignore
        error={error}
        loading={loading}
      />
      
    </div>
  );
};

export default SignupContainer;
