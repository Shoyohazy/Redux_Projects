import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from "../store/UserReducer";

function UserList() {
  const dispatch = useDispatch();
  const handleDelete = () =>{
    dispatch.deleteUsers()
  }
  const users = useSelector((state) => state.users);
  return (
    <div>
      <ul>
        {users.map((users, index) => 
          (<li key={index}>
              <h3>{users.name}</h3>
              <p>{index + 1}</p>
              <button>Update</button>
              <button onClick={handleDelete}>Delete</button>
          </li>)
        )}
      </ul>
    </div>
  );
}

export default UserList;
