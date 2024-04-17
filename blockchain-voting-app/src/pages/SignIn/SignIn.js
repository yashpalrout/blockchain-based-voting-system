import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./sign-in.css";

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
        <div className="group-child" />
        <div className="sign-up-to">Sign up to BlockVote</div>
        <div className="sign-in-parent" onClick={onGroupContainerClick}>
          <div className="sign-in">Sign in</div>
          <div className="group-item" />
        </div>
        <div className="group-inner" />
        <div className="line-div" />
        <div className="group-child1" />
        <div className="group-child2" />
        <div className="admin-id">Admin ID</div>
        <div className="name">Name</div>
        <div className="phone-no">Phone no.</div>
        <div className="password">Password</div>
      </div>
    </div>
  );
};

export default SignIn;
