import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./UserForm.module.css";
import Button from "../UI/Button";
import Errors from "../UI/Errors";

const UserForm = (props) => {
  const [enteredUserName, setUserName] = useState("");

  const [enteredUserAge, setUserAge] = useState("");

  const [error, setError] = useState();

  const changeUserName = (event) => {
    setUserName(event.target.value);
  };

  const changeUserAge = (event) => {
    setUserAge(event.target.value);
  };

  const userFormHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserAge.trim().length === 0 &&
      enteredUserName.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    setUserName("");
    setUserAge("");
  };

  const resetError = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <Errors
          title={error.title}
          message={error.message}
          onConfirm={resetError}
        ></Errors>
      )}
      <Card className={classes.input}>
        <form onSubmit={userFormHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUserName}
            onChange={changeUserName}
          ></input>

          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={enteredUserAge}
            onChange={changeUserAge}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
