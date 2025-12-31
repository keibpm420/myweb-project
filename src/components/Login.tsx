import { useState } from "react";
import { supabase } from "../lib/supabase";
import toast from "react-hot-toast";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ email: "", password: "" });

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword(form);

        if (error) {
            toast.error(`ログイン失敗: ${error.message}`);
        } else {
            toast.success("ログインしました");
        }
        setLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.type]: e.target.value });
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <input
                    type="email"
                    placeholder="メールアドレス"
                    required
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="パスワード"
                    required
                    onChange={handleChange}
                />
                <button type="submit" disabled={loading}>
                    {loading ? "ログイン中..." : "ログイン"}
                </button>
            </form>
        </div>
    );
};

export default Login;
