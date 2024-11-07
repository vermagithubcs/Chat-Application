import React, { useState } from "react";
import "./RegisterPage.css";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
function RegisterPage() {
  const [name, setName] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profile_pic: "",
  });

  const [uploadPhoto, setUploadPhoto] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setUploadPhoto(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClearUpload = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setUploadPhoto(" ");
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(data);
  };

  return (
    <div className="Register_Page">
      <div className="Register_Box" >
        <h2>Welcome to Chat App</h2>
        <form className="Register_Form" onSubmit={handleSubmit}>
          <div className="Input_Box">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              required
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="Input_Box">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              required
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="Input_Box">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              required
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="Input_Box">
            <label htmlFor="profile_pic">
              Profile Picture :
              <div className="upload_box">
                <p>
                  {uploadPhoto.name ? uploadPhoto.name : "Upload Profile Photo"}
                </p>
                {uploadPhoto?.name && (
                  <button id="closeBTN" onClick={handleClearUpload}>
                    <IoClose />
                  </button>
                )}
              </div>
            </label>
            <input
              type="file"
              id="profile_pic"
              name="profile_pic"
              accept=".jpg,.png,.jpeg"
              hidden
              onChange={handleUpload}
            />
          </div>
          <button type="submit" className="Register_Button">Register</button>
        </form>
        <p style={{textAlign: "center"}}>Already have an account? <Link to="/email" style={{color: "var(--primary)"}}>Login</Link></p>
      </div>
    </div>
  );
}

export default RegisterPage;
