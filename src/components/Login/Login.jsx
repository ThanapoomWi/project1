import React, { useState } from "react";
import "./Login.css";
import logo from '/logo1.png'
import { useLocation, useNavigate } from "react-router-dom";
function Login({setStatus,currentTab}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && password){
      Swal.fire({
        title: "เข้าสู่ระบบสำเร็จ!",
        text: "ยินดีต้อนเข้ารับสู่ Slide me Admin",
        icon: "success",
        confirmButtonText: "เข้าสู่ระบบ",
      }).then(() => {
        setStatus('login')
        navigate('/')
      })
    }
    else {
      Swal.fire({
        title: "กรุณากรอกข้อมูล",
        text: "",
        icon: "warning",
      })
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header text-center">
          <img
            src={logo} 
            alt="Logo"
            className="logo"
          />
          <h3 className="mt-3">SLIDE ME</h3>
          <p>กรุณากรอกอีเมลและรหัสผ่านของคุณเพื่อดำเนินการต่อ</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="อีเมล"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="รหัสผ่าน"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-end mt-1">
              <a href="#forgot-password" className="forgot-password-link">
                ลืมรหัสผ่าน?
              </a>
            </div>
            
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              id="rememberMe"
              className="form-check-input"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe" className="form-check-label">
              จดจำรหัสผ่าน
            </label>
          </div>
          <button onClick={handleSubmit} type="submit" className="btn btn-success w-100">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
