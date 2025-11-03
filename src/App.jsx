import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="container">
      <div className="top-bar">
        <h1>Users</h1>
        <button className="theme-toggle" onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card-wrapper">
            <div className="user-card">
              <div className="card-front">
                <h2>{user.name}</h2>
                <p><strong>Username:</strong> {user.username}</p>
              </div>

              <div className="card-back">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.website}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
