import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import UserCard from "./components/UserCard";

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <>
      {isRegistered ? (
        <div className="w-full p-10 flex gap-10 ">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        // <Login setIsRegistered={setIsRegistered} />
        <Register setIsRegistered={setIsRegistered} setUsers={setUsers} />
      )}
    </>
  );
};

export default App;
