import { useState } from "react";
import { supabase } from "../lib/supabase";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert("ログイン失敗: " + error.message);
        }
        setLoading(false);
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="メールアドレス"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="パスワード"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button disabled={loading}>
                    {loading ? "ログイン中..." : "ログイン"}
                </button>
            </form>
        </div>
    );
};

export default Login;
