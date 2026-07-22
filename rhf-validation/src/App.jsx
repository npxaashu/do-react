import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className=" p-10">
      <Navbar setToggle={setToggle} />

      {!toggle ? (
        <div className="cards flex justify-center flex-wrap p-10 gap-10 items-center">
          {users.length > 0 ? (
            users.map((user) => <UserCard key={user.id} user={user} />)
          ) : (
            <h3 className="text-2xl">No User</h3>
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center ">
          <Form setToggle={setToggle} setUsers={setUsers} />
        </div>
      )}
    </div>
  );
};

export default App;
