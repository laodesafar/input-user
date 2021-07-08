import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li key={user.id} className="list-none rounded-sm border p-3">
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
