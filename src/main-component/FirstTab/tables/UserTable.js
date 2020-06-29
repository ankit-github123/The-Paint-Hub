import React from "react";

const UserTable = (props) => (
  <table>
   
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id} style={{ marginBottom: "14px" }}>
            <td>
              <div>
                <div style={{ fontSize: "10px", color: " #bdbdbd" }}>
                  Warehouse Name
                </div>
                <input 
                value={user.name} 
                style={{border: "1px solid #bdbdbd",
                    width: "300px",
                    padding: "5px",
                    borderRadius: "10px",
                marginBottom:"3rem"}}/>
              </div>
            </td>
            <td>
              <div>
                <div style={{ fontSize: "10px", color: " #bdbdbd" ,margin:"0 28px"}}>
                  Area of the Warehouse
                </div>
                <input 
                value={user.username}  
                style={{border: "1px solid #bdbdbd",
                width: "200px",
                padding: "5px",
                borderRadius: "10px",
                margin:" 0px 25px 3rem 25px"}}/>
              </div>
            </td>
            <td>
              {/*<button
                className="button muted-button"
                onClick={() => props.editRow(user)}
              >
                Edit
             </button> */}
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
                style={{ background: "#E62E2D", padding: "5px 10px", border: "1px solid #E62E2D" ,borderRadius:"8px" ,color:"white",marginBottom:"2rem"}}
              >
                Remove
              </button>
            </td>
            <br />
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
