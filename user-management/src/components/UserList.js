import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from "../store/UserReducer";
import './userlist.css'

function UserList() {
  const dispatch = useDispatch();
  const handleDelete = (index) =>{
    dispatch(deleteUsers(index))
  }
  const users = useSelector((state) => state.users);

  if(users.length > 0){
    return (
      < >
        <ul>
          {users.map((users, index) => 
            (<li className="user-list" key={index}>
                <div className="userinfo">
                  <h3 className="index">{index + 1}</h3>
                  <h3>{users.name}</h3>
                </div>
                <div className="userbuttons"> 
                  <button className="update-button">Update</button>
                  <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                </div>
            </li>)
          )}
        </ul>
      </>
    );
  }
  else{
    return <h1>No list</h1>
  }
}

export default UserList;
