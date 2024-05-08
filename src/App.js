import React, { useState } from "react";
import UserForm from "./UserForm/UserForm";
import DisplayUsers from "./UserForm/DisplayUsers";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserData = (uName, uAge) => {
    setUsersList((prevUserData) => {
      return [
        ...prevUserData,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <UserForm onAddUser={addUserData}></UserForm>
      <DisplayUsers users={usersList}></DisplayUsers>
    </div>
  );
}

export default App;
