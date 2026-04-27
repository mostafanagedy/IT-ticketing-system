import { useState } from "react";
import loginImg from "../../assets/loginImag.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLogged, setKeepLogged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Left: Form */}
        <div className="login-form-side">
          <h2 className="login-title">WELCOME BACK</h2>
          <p className="login-subtitle">Login With Orchida mail</p>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label>Email<span className="required">*</span></label>
              <input
                type="email"
                placeholder="example@orchida-soft.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login-field">
              <label>Password<span className="required">*</span></label>
              <input
                type="password"
                placeholder="@B123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="login-options">
              <label className="keep-logged">
                <input
                  type="checkbox"
                  checked={keepLogged}
                  onChange={(e) => setKeepLogged(e.target.checked)}
                />
                Keep Me Logged in
              </label>
              <a href="#" className="forgot-link">Forgot Your Password?</a>
            </div>

            <button type="submit" className="login-btn">Submit</button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="login-image-side">
          <img src={loginImg} alt="Ticketing System" />
          <div className="login-image-label">Ticketing System</div>
        </div>
      </div>
    </div>
  );
}

export default Login;






<!--  -->



<!-- ========================================================================================== -->
.login-page {
  width: 100%;
  min-height: 100vh;
  background-color: #4b4b8f;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  display: flex;
  width: 900px;
  max-width: 90vw;
  height: 500px;
  max-height: 85vh;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
}

/* ── Left: Form ── */
.login-form-side {
  flex: 1;
  background: #f5f5f5;
  padding: 44px 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-title {
  font-size: 1.7rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 2px;
  color: #1a1a2e;
  margin-bottom: 4px;
}

.login-subtitle {
  text-align: center;
  color: #888;
  font-size: 0.82rem;
  margin-bottom: 28px;
}

.login-field {
  margin-bottom: 16px;
}

.login-field label {
  display: block;
  font-weight: 700;
  font-size: 0.88rem;
  color: #222;
  margin-bottom: 6px;
}

.required {
  color: #e53935;
  margin-left: 2px;
}

.login-field input {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #d0d0d0;
  border-radius: 6px;
  font-size: 0.88rem;
  background: #fff;
  color: #333;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.login-field input::placeholder {
  color: #bbb;
}

.login-field input:focus {
  border-color: #4b4b8f;
}

.login-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  font-size: 0.8rem;
}

.keep-logged {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #555;
  cursor: pointer;
  font-size: 0.8rem;
}

.keep-logged input[type="checkbox"] {
  width: 14px;
  height: 14px;
  accent-color: #4b4b8f;
  cursor: pointer;
}

.forgot-link {
  color: #e53935;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.8rem;
}

.forgot-link:hover {
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background-color: #3c3c82;
  color: #fff;
  border: none;
  border-radius: 7px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: background 0.2s;
}

.login-btn:hover {
  background-color: #2d2d6b;
}

/* ── Right: Image ── */
.login-image-side {
  flex: 1;
  background-color: #e8e8f0;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
}

.login-image-side img {
  width: 100%;
  max-width: 420px;
  height: auto;
  object-fit: contain;
  display: block;
  padding: 0 30px 0;
}

.login-image-label {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(42, 42, 94, 0.85);
  color: #fff;
  padding: 10px 32px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  white-space: nowrap;
  z-index: 2;
}


