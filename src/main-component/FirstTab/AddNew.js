import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

const AddNew = () => {
  const usersData = [
    { id: 1,name: "AAA", category: "aiueo",address:"krpuram",contactnumber:"9898989898",noware:"4" },
    { id: 2, name: "BBB",category: "aiueo",address:"krpuram",contactnumber:"9898989898",noware:"4" },
    { id: 3, name: "CCC", category: "aiueo",address:"krpuram",contactnumber:"9898989898",noware:"4" }
  ];


  const [users, setUsers] = useState(usersData);


  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", category: "",address:"",contactnumber:"",noware:""};

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, category: user.category,address: user.address, contactnumber: user.contactnumber, noware: user.noware,  });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="addnewcontainer">
     
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
             
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          
        <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
       
      </div>
    </div>
  );
};

export default AddNew;
