import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../utils/auth";
import "../styles/login.css"; // Assuming you have a CSS file for styling
import userIcon from "../resources/images/user.jpg"; 
import { toast } from "react-toastify";
import { Lock, Person } from "@mui/icons-material";
import custom_loader from "../utils/custom_loader"; // Import the loader utility

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    custom_loader.showLoader(); // Show loader before authentication
    e.preventDefault();

    const isAuthenticated = await authenticateUser(username, password);
    if (isAuthenticated) {
      history("/dashboard");
    } else {
      toast.error("Invalid username or password");
      setPassword("");
    }
    custom_loader.hide(); // Hide loader after authentication
  };

  return (
    <div className="section">
      <div className="box">
        <div className="form">
          <img src={userIcon} className="user" alt="" />
          <h2>Welcome</h2>
          <form onSubmit={handleLogin}>
            <div className="inputBx">
              <input
                type="text"
                name="username"
                placeholder="Username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Person className="user-icon icon " />
            </div>
            <div className="inputBx">
              <input
                type="password"
                name="passward"
                id="password"
                placeholder="Passward"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Lock className="lock-icon icon" />
            </div>
            {/* <label className="remeber">
              <input type="checkbox" /> Remember Me
            </label> */}
            <div className="inputBx">
              <input type="submit" name="submit" value="Login" id="submit" />
            </div>
          </form>
          {/* <p>
            Forgot <a href="#">Passward</a>?{" "}
          </p>
          <p>
            Need for a <a href="#">Account</a>?{" "}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
