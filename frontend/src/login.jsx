import { useState } from "react";
import './login.css';

function Login() {
  const [formData, setformData] = useState({
    username: '',
    password: '',
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
    const response = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful");
      console.log(data);

      // optional: clear form
      setformData({
        username: '',
        password: '',
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
        <h2>Login</h2>

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
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handlechange}
          /><br />


          <button type="submit">Log-in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;