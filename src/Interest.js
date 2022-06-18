import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./Interest.css";

export default function Interest() {
  const [user] = useAuthState(auth);
  return (
    <>
      {!user && <Redirect exact to="/" />}
      <div className="outer-container">
        <div className="scrollmenu">
          <div class="sect">
            <Link to="/business">Business</Link>
          </div>
          <div class="sect">
            <Link to="/sports">Sports</Link>
          </div>
          <div class="sect">
            <Link to="/news">News</Link>
          </div>
          <div class="sect">
            <Link to="/crypto">Crypto</Link>
          </div>
        </div>

        <Link to="/channels" className="gif_logo">
          <img src="/discord_logo.gif" alt="DISCORD" />
        </Link>
      </div>
    </>
  );
}
