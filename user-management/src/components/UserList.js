import { useSelector } from "react-redux";

function UserList() {
  const users = useSelector((state) => state.users);
  return (
    <div>
      <ul>
        {users.map((users, index) => {
          <li key={index}>
              <h3>{users.name}</h3>
              <p>{index}</p>
              <button>Update</button>
              <button>Delete</button>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default UserList;
