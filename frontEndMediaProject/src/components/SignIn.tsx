// CreateAcc.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../signIn.css'


function CreateAcc() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
<div className={`container ${isActive ? 'active' : ''}`} id="container">
        <div className="form-container register-container">
          <form action="#">
          <h1>Sign Up</h1>
          <input type = "text" placeholder="Name" required/>
          <input type = "email" placeholder="Email"required/>
          <input type = "password" placeholder="Password" required/>
           <button>Register</button>
           <span> or use your acccount</span> 
           <div className="social-container">
          <a href="#" className="social"><i className="lni lni-facebook-fill"></i></a>
          <a href="#" className="social"><i className="lni lni-google"></i></a>
          <a href="#" className="social"><i className="lni lni-linkedin-original"></i></a>
            </div>
          </form>
        </div>
      

      <div className="form-container login-container">
        <form action="#">
          <h1>Login</h1>
          <input type="email" placeholder="Email"  required/>
          <input type="password" placeholder="Password" required/>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label>Remeber Me</label>
            </div>
            <div className="pass-link">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button>Login</button>
          <span>or use your account</span>
          <div className="social-container">
          <a href="#" className="social"><i className="lni lni-facebook-fill"></i></a>
          <a href="#" className="social"><i className="lni lni-google"></i></a>
          <a href="#" className="social"><i className="lni lni-linkedin-original"></i></a>
          </div>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="title">Already registered?</h1>
            <p>Login here</p>
<button className="ghost" onClick={() => setIsActive(false)}>
  Login
  <i className="lni lni-arrow-left login"></i>
</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="title">Start <br/> Reviewing Now</h1>
            <p>New here? Join us and start your journey</p>
<button className="ghost" onClick={() => setIsActive(true)}>
  Register
  <i className="lni lni-arrow-right register"></i>
</button>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
}

export default CreateAcc;