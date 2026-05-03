import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState(null);

  async function handleRandomUser() {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers",
        { method: "GET", headers: { accept: "application/json" } },
      );

      if (!response) throw new Error("Request failed");

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="app">
      <h1 className="title">FreeAPI Random Users UI</h1>
      <div className="panel">
        <h3 className="section-title">Name:-</h3>
        <div className="user-list">
          {users?.data?.data?.map((user) => (
            <p className="user-card" key={user.id}>
              Email : {user.email}, Name :{" "}
              {user.name.first + " " + user.name.last}, Gender : {user.gender}
            </p>
          ))}
        </div>
      </div>
      <button className="action" onClick={handleRandomUser}>
        Get Random User
      </button>
    </div>
  );
}

export default App;
