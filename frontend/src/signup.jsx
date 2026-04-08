import { useState } from "react";
import './signup.css';

function Signup() {
  const [formData, setformData] = useState({
    username: '',
    password1: '',
    password2: '',
  });

  const handlechange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Signup successful");
      console.log(data);

      // optional: clear form
      setformData({
        username: '',
        password1: '',
        password2: '',
      });

    } else {
      alert(JSON.stringify(data)); // shows error from backend
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong");
  }
};

  return (
    <div className="container">
      <div className="fill">
        <h2>Sign-Up</h2>

        <form onSubmit={handleSubmit}>
          Username <br />
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handlechange}
          /><br />

          Password <br />
          <input
            type="password"
            name="password1"
            placeholder="password"
            value={formData.password1}
            onChange={handlechange}
          /><br />

          Confirm Password <br />
          <input
            type="password"
            name="password2"
            placeholder="confirm password"
            value={formData.password2}
            onChange={handlechange}
          /><br />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;