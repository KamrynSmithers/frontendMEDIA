// CreateAcc.tsx
import { useNavigate } from "react-router-dom";
import '../App.css';
import '../signIn.css'


function CreateAcc() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container" id="container">
        <div className="form-container register-container">
          <form action="#">
          <h1>Register Here.</h1>
          <input type = "text" placeholder="Name"/>
          <input type = "email" placeholder="Email"/>
          <input type = "password" placeholder="Password"/>
           <button>Register</button>
           <span> or use your acccount</span> 
           <div className="social-container">
          <a href="#" className="social"><i className="lni lni-facebook-fill"></i></a>
          <a href="#" className="social"><i className="lni lni-google"></i></a>
          <a href="#" className="social"><i className="lni lni-linkedin-original"></i></a>
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
            <h1 className="title">Hello <br/> friends</h1>
            <p>if have an account login here and have fun</p>
            <button className="gost" id="login">LogIn
              <i className="lni lni-arrow-left login"></i>
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="title">Start your<br/> journey now</h1>
            <p>If you don't have an account yet, join us and start your journey</p>
            <button className="ghost register">Register
              <i className="lni lni-arrow-right register"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CreateAcc;