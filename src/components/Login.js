import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import "./Login.css";
import { auth, provider } from "../firebase";
import { Button } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
const styleForLogo = {
  color: "white",
  height: "12vh",
  width: "12vh",
};

export default function Login() {
  const [user] = useAuthState(auth);
  const history = useHistory(); // Previously it was useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(nickname)
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        history.push("/channels");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // if auth is not null
        console.log(auth);
        if (auth) {
          history.push("/channels");
        }
      })
      .catch((error) => alert(error.message)); // Do it alert("Account already exists")
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();

    auth
      .signInWithPopup(provider)
      .then(() => history.push("/channels"))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo__container">
        <SportsEsportsIcon style={styleForLogo} />
      </div>

      <div className="login__container">
        <h2>Sign-in</h2>
        <form>
          <div className="form__contents">
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={user ? true : false}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={user ? true : false}
            />

            <button
              type="submit"
              onClick={signIn}
              disabled={user ? true : false}
            >
              Sign-In
            </button>
          </div>
        </form>
        <p>
          By signing-in you agree to the conditions of VIT's Community Server.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          className="login__registerButton"
          onClick={register}
          disabled={user ? true : false}
        >
          Create Account
        </button>
      </div>
      {user ? (
        <div className="open_discord">
          <Link to="/channels">
            <Button className="open_discord_btn">Open Unicord</Button>
          </Link>
        </div>
      ) : (
        <div className="google__signin">
          <Button className="open_discord_btn" onClick={signInWithGoogle}>
            {" "}
            Continue with Google{" "}
          </Button>
        </div>
      )}
    </div>
  );
}
