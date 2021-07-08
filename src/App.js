import { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserLIst";

function App() {
  const [userlist, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userlist} />
    </Fragment>
  );
}

export default App;
