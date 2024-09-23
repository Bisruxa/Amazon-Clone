import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../component/DataProvider/DataProvider";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setLoading] = useState({ signIn: false, signUp: false });
  const navigate = useNavigate();

 const actionHandler = async (e) => {
   e.preventDefault();
   if (e.target.name === "signin") {
     setLoading({ ...loading, signIn: true });
     
      signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
       dispatch({
         type: Type.SET_USER,
         user: userInfo.user,
       });
       setLoading({ ...loading, signIn: false });
       navigate("/");
      })
     .catch ((err)=> {
       console.log(err);
       setError(err.message);
       setLoading({ ...loading, signIn: false });
     })
   } else {
     setLoading({ ...loading, signUp: true });
   createUserWithEmailAndPassword(
         auth,
         email,
         password
       ).then((userInfo)=>{
  dispatch({
         type: Type.SET_USER,
         user: userInfo.user,
       });
       setLoading({ ...loading, signUp: false });
       navigate("/");
       })
     
     .catch ((err) =>{
       console.log(err);
       if (err.code === "auth/email-already-in-use") {
         setError("This email is already in use. Please sign in instead.");
       } else {
         setError(err.message);
       }
       setLoading({ ...loading, signUp: false });
     })
   }
 };


  return (
    <section className="login">
      <Link to="/">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG2.png" alt="" />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form onSubmit={actionHandler}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button type="submit" className="signin" name="signin">
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <div>
          <button
            type="button" // Changed to button to avoid form submission
            className="signup"
            name="signup"
            onClick={actionHandler}
          >
            {loading.signUp ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              "Create your Amazon Account"
            )}
          </button>
          {error && (
            <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
          )}
        </div>
      </div>
    `</section>
  );
}

export default Auth;
