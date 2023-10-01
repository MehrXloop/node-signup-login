import React, { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      username: username,
      password: password,
    };

    try {
      // Send a POST request to the server
      const response = await fetch("http://localhost:4000/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the response status is OK (200), you can handle success here
        console.log("Signup successful!");
        // You can also redirect the user or perform any other necessary actions.
      } else {
        // Handle errors here
        console.error("Signup failed");
        // You can display an error message to the user or take other actions.
      }
    } catch (error) {
      console.error("Error:", error);
    }

    // Reset the form fields
    setUsername("");
    setPassword("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>username</p>
      <input
        type="text"
        value={username}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <p>Password</p>
      <input
        type="password"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Sign up</button>
    </form>
  );
}
