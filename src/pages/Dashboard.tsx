import React, { useEffect, useState } from "react";
import NavBar from "../navigation/NavBar";
import { Search, Visibility, VisibilityOff } from "@mui/icons-material";
import "../styles/dashboard.css"; // Assuming you have a CSS file for styling
import { getCredentials } from "../utils/api";
import PassPhraseModal from "./PassPhraseModal";
import { decryptData } from "../utils/encryption";

const Dashboard: React.FC = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [phrase, setPhrase] = useState("");
  const [credentials, setCredentials] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalrequred, setIsModalRequired] = useState(false);
  useEffect(() => {
    getCredentials()
      .then((response) => {
        setCredentials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching credentials:", error);
      });
  }, []);
  const setPassword = () => {
    if(!phrase){
        setIsModalRequired(true);
    }else{
        setPhrase("");
    }
    setIsPassword(!isPassword);
}
    const closeModal = () => {
        setIsModalRequired(false);
    };
  return (
    <div className="main-layout">
      <NavBar name="Home" />
      <div className="content-area">
        <div className="header">Credentials Home</div>
        <PassPhraseModal isOpen={isModalrequred} onRequestClose={closeModal} phrase={phrase} setPhrase={setPhrase}  />
        <div className="search-bar double-70-30">
          <div className="double-70">
            <input type="text" placeholder="Search credentials..." value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
          </div>
          <div className="double-30">
            <button className="search-button">Search</button>
            <Search className="search-icon" />
            {true && (
              <div
                className="password-icon"
                onClick={() => setPassword()}
              >
                {!isPassword && <Visibility />}
                {isPassword && <VisibilityOff />}
              </div>
            )}
          </div>
        </div>
        <div className="content credentials-list">
            <div className="row-3">
                <div className="Name column">Name</div>
                <div className="username column">Username</div>
                <div className="password column">Password</div>
                </div>
          {credentials
            .filter((cred) =>
              cred.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((cred, index) => (
              <div className="row-3">
                <div className="Name column">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={cred.name}
                    required
                    placeholder="Enter name"
                  />
                </div>
                <div className="username column">
                  <input
                   type={isPassword ? "password" : "text"}
                    id="username"
                    name="username"
                    value={isPassword? cred.entity: decryptData(cred.entity, phrase)}
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div className="password column">
                  <input
                    type={isPassword ? "password" : "text"}
                    id="password"
                    name="password"
                    value={isPassword? cred.pwd: decryptData(cred.pwd, phrase)}
                    placeholder="Enter password"
                    required
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
