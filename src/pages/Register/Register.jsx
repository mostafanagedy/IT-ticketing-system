import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Register.module.css";
import logoImge from "../../assets/loginImag.png";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { userName, email, password, confirmPassword } = formData;

    if (!userName || !email || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields.");
      setSuccessMessage("");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      setSuccessMessage("");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setSuccessMessage("");
      return;
    }

    setErrorMessage("");
    setSuccessMessage("Your account has been created successfully.");
  };

  return (
    <>
      <div className={style.registerPage}>
        <div className={style.langIcon}> icon</div>
        <div className={style.registerCard}>
          <h2 className={style.registerTitle}>CREATE ACCOUNT</h2>
          <div className={style.registerForm}>
            <div className={style.formItemes}>
              <form onSubmit={handleSubmit}>
                <input   type="text"   placeholder="user name"   name="userName"   value={formData.userName}   onChange={handleChange}   className={style.inputField}   />
                <input   type="email"  placeholder="na@exampl.com"  name="email"  value={formData.email}   onChange={handleChange} className={style.inputField} />
                <input  type="password"   placeholder="enter your password"  name="password"  value={formData.password}  onChange={handleChange}     className={style.inputField} />
                <input  type="password"   placeholder="confiarme youy password"  name="confirmPassword" value={formData.confirmPassword}onChange={handleChange} className={style.inputField} />

                {errorMessage && (<p className={style.errorMessage}>{errorMessage}</p> )}

                {successMessage && ( <p className={style.successMessage}>{successMessage}</p> )}

                <button type="submit" className={style.submitButton}>
                  Register
                </button>
                <p>
                  Don't have account?{" "}
                  <Link className={style.logeinBage} to="/login">
                    login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div>
          <img src={logoImge} alt="register-imag" />
        </div>
      </div>
    </>
  );
};
export default Register;
