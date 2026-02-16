// CreateAcc.tsx
import { useNavigate } from "react-router-dom";
import '../App.css';
import React from "react";

function CreateAcc() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container" id="container">
        <div className="form-container register-container">
          <form action="#">
          <h1>Register Here.</h1>
          <input type = "text" placeholder="Name"/>
          <input type = "text" placeholder="Email"/>
          <input type = "text" placeholder="Password"/>
           <button>Register</button>
           <span> or use your acccount</span> 
           <div className="social-container">
            </div>
          </form>
        </div>
      </div>

      <div className="form-container login-container">
        <form action="#">
          <h1>Login Here</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="Remeber Me"></label>
            </div>
            <div className="pass-link">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button>Login</button>
          <span></span>
        </form>
      </div>

    </div>
  );
}

export default CreateAcc;