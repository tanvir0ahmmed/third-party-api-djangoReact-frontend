import React from "react";
import "../../lib/sass/_signIn.scss";
import google_icon from "../../assets/icon/001-google.svg";
import facebook_icon from "../../assets/icon/007-facebook.svg";
import github_icon from "../../assets/icon/006-github.svg";
export default function SignIn() {
  return (
    <div className="signIn-form">
      <div className="card sign-in-card">
        <div className="card-body">
          <div className="card google-card">
            <div className="card-body">
              <h1 className="card-text g-card-text">
                <img src={google_icon} alt="#" className="g-card-icon"></img>
                Sign In with your Google account
              </h1>
            </div>
          </div>

          <div className="card facebook-card">
            <div className="card-body">
              <h1 className="card-text g-card-text">
                <img src={facebook_icon} alt="#" className="g-card-icon"></img>
                Sign In with your Google account
              </h1>
            </div>
          </div>

          <div className="card github-card">
            <div className="card-body">
              <h1 className="card-text g-card-text">
                <img src={github_icon} alt="#" className="g-card-icon"></img>
                Sign In with your Google account
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
