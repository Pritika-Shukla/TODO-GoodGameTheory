import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginView from "../../views/LoginView";
import { logIn } from "../../contexts/AuthContext";

const LoginContainer = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async () => {
        const { email, password } = loginForm;
        setLoading(true);
        setError(null);

        try {
            await logIn({ email, password });
            navigate('/home');
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An error occurred';
            setError(errorMessage);
            console.error("Login failed:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };

    return (
        <LoginView
            email={loginForm.email}
            password={loginForm.password}
            handleChange={handleChange}
            onClick={handleSubmit}
            error={error}
            loading={loading}
        />
    );
};

export default LoginContainer;