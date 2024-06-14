import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./sign-in.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/admin-home");
  }, [navigate]);

  return (
    <div className="desktop-2">
      <div className="desktop-2-child" />
      <div className="desktop-2-item" />
      <div className="httpslottiefilescomanimat-parent">
        <img
          className="httpslottiefilescomanimat-icon"
          alt=""
          src="/httpslottiefilescomanimationswavingmanillustration3makvyzzxy@2x.png"
        />
        <b className="hello-friend">Hello, Friend!</b>
        <div className="enter-your-personal">
          Enter your personal details to resume your journey with us.
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="group-child">
          <div className="text-center mb-4">
            <h2 className="sign-up-to">Sign up to BlockVote</h2>
          </div>
          <div className="form-group mt-4">
            <label className="admin-id" htmlFor="adminId">Admin ID</label>
            <input type="text" className="form-control" id="adminId" placeholder="Enter Admin ID" />
          </div>
          <div className="form-group mt-3">
            <label className="password" htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter Password" />
          </div>
          <div className="text-center mt-4 sign-in-parent" onClick={onGroupContainerClick}>
            <button className="btn btn-primary sign-in-btn">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
