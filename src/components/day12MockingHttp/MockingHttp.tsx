import { useEffect, useState } from "react";

function MockingHttp() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        setUser(users.map((user: { name: string }) => user.name))
      )
      .catch((error) => setError(error.message));
  });

  if (error) {
    return <h2>Error Occour</h2>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {user.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default MockingHttp;
