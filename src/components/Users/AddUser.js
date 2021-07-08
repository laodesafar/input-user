import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUsername.trim().length === 0 ||
      enteredUsername.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age ( >0 ).",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      <Card>
        <form className="mt-8 space-y-6" onSubmit={addUserHandler}>
          <div className="rounded-md shadow-sm ">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                onChange={usernameChangeHandler}
                id="username"
                type="text"
                value={enteredUsername}
                className="appearance-none rounded-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="age" className="sr-only">
                Age
              </label>
              <input
                onChange={ageChangeHandler}
                id="age"
                type="number"
                value={enteredAge}
                className="appearance-none rounded-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Age (Years)"
              />
            </div>
          </div>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
    </div>
  );
};

export default AddUser;
