import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("Please fill all the details");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = (event) => {
      setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    // Clearing all the previous error messages
    // Setting all the error messages to initial state
    setMessage("Please fill all the details");
    setNameError("");
    setEmailError("");
    setGenderError("");
    setPhoneError("");
    setPasswordError("");

    let flag = true;

    if(name == "" || email == "" || password == "" || phoneNumber == "") {
      setMessage("All fields are mandatory");
      flag = false;
    }

    if(name != "" && name.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i) == null) {
      setNameError("Name is not alphanumeric");
      flag = false;
    }

    if(password != "" && password.length <= 5 ) {
      setPasswordError("Password must contain atleast 6 letters");
      flag = false;
    }

    if(email != "" && email.indexOf("@") == -1) {
      setEmailError("Email must contain @");
      flag = false;
    }

    let isNum = /^\d+$/.test(phoneNumber);

    if(phoneNumber != "" && (!isNum)) {
      setPhoneError("Phone Number must contain only numbers");
      flag = false;
    }

    
    if (flag) {
      let username;
      const pos = email.indexOf("@");
      username = email.substring(0, pos);
      setMessage(`Hello ${username}`);
    }
    
  }

  return (
    <div id="main">
      <form className="container" onSubmit={handleSubmit}>
        <h3>{message}</h3>

        <div className="grid-item">
          <label>Name</label>
          <input type="text" data-testid = 'name' value={name} onChange={handleNameChange}/>
          <h3>{nameError}</h3>
        </div>

        <div className="grid-item">
          <label>Email address</label>
          <input type="email" data-testid = 'email' value={email} onChange={handleEmailChange}/>
          <h3>{emailError}</h3>
        </div>

        <div className="grid-item">
          <label>Gender</label>
          <select data-testid='gender' value={gender} onChange={handleGenderChange}>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="others">others</option>
          </select>
          <h3>{genderError}</h3>
        </div>

        <div className="grid-item">
          <label>Phone Number</label>
          <input type="tel" data-testid = 'phoneNumber' value={phoneNumber} onChange={handlePhoneChange}/>
          <h3>{phoneError}</h3>
        </div>

        <div className="grid-item">
          <label>Password</label>
          <input type="password" data-testid = 'password' value={password} onChange={handlePasswordChange}/>
          <h3>{passwordError}</h3>
        </div>

        <div className="grid-item">
          <button type="submit" data-testid = 'submit'>Submit</button>
        </div>
        
      </form>
    </div>
  )
}


export default App;
