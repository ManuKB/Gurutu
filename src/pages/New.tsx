import React, { useState } from "react";
import NavBar from "../navigation/NavBar";
import "../styles/new.css"; // Assuming you have a CSS file for styling
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PassPhraseModal from "./PassPhraseModal";
import { encryptData } from "../utils/encryption";
import { addCredentials } from "../utils/api";
import custom_loader from "../utils/custom_loader";
import { toast } from "react-toastify";

const Dashboard: React.FC = () => {
  // state to hold inputs
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });
    const [isPassword, setIsPassword] = useState(true);
    const [phrase, setPhrase] = useState("");

  // update state on input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encryptPass=encryptData(formData.password, phrase);
    const credentials = {
      ...formData,
      pwd: encryptPass,
      entity: formData.username,
      type: "credentials",
    };
    custom_loader.showLoader(); // Show loader before API call
    addCredentials(credentials)
      .then((response) => {
        toast.success("Credentials added successfully");
        setPhrase("");
      })
      .catch((error) => {
        toast.error("Error adding credentials")
        console.error("Error adding credentials:", error);
      }).finally(() => {
        custom_loader.hide(); // Hide loader after API call
      });

  };

  return (
    <div className="main-layout">
      <NavBar name="New" />
      <div className="content-area">
        <div className="header">Create New Credentials</div>
        <div className="content">
          <form className="new-credentials" onSubmit={handleSubmit}>
            <div className="label-left-item item">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="label-left-item item">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                required
                onChange={handleChange}
              />
            </div>
            <div className="label-left-item item">
              <label htmlFor="password">Password</label>
              <input
                type={isPassword? "password" : "text"}
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                required
                onChange={handleChange}
              />
              {formData.password && (
              <div className="password-icon" onClick={() => setIsPassword(!isPassword)}>
              {isPassword && (<Visibility/>)}
              {!isPassword && (<VisibilityOff/>)}</div>)}
            </div>
             <div className="label-left-item item">
              <label htmlFor="password">Encyption Phrase</label>
              <input
                type= "text"
                id="phrase"
                name="phrase"
                placeholder="Enter encryption phrase"
                value={phrase}
                required
                onChange={(e) => setPhrase(e.target.value)}
              />
              </div>
            <div className="bottom-action">
              <button className='button-primary' type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
