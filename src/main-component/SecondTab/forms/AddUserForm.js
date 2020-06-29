import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
    <div style={{display:"flex"}}>
      <div style={{marginRight:"20px"}}>
        <div style={{ fontSize: "10px", color: " #bdbdbd" }}>
         S.no
        </div>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          style={{
            border: "1px solid #bdbdbd",
            width: "200px",
            padding: "5px",
            borderRadius: "10px",
            marginBottom: "3rem",
          }}
        />
      </div>
      <div style={{marginRight:"20px"}}>
      <div style={{ fontSize: "10px", color: " #bdbdbd" }}>
       Customer Name
      </div>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        style={{
          border: "1px solid #bdbdbd",
          width: "200px",
          padding: "5px",
          borderRadius: "10px",
          marginBottom: "3rem",
        }}
      />
    </div>
    <div style={{marginRight:"20px"}}>
        <div style={{ fontSize: "10px", color: " #bdbdbd" }}>
         Category
        </div>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          style={{
            border: "1px solid #bdbdbd",
            width: "200px",
            padding: "5px",
            borderRadius: "10px",
            marginBottom: "3rem",
          }}
        />
      </div>
      <div style={{marginRight:"20px"}}>
        <div style={{ fontSize: "10px", color: " #bdbdbd" }}>
        Address
        </div>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          style={{
            border: "1px solid #bdbdbd",
            width: "200px",
            padding: "5px",
            borderRadius: "10px",
            marginBottom: "3rem",
          }}
        />
      </div>
      <br/>
     
      </div>

      <div  style={{display:"flex"}}>
      
      <div style={{marginRight:"20px"}}>
      <div style={{ fontSize: "10px", color: " #bdbdbd" }}>
       Contact Number 
      </div>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        style={{
          border: "1px solid #bdbdbd",
          width: "200px",
          padding: "5px",
          borderRadius: "10px",
          marginBottom: "3rem",
        }}
      />
    </div>
    <div style={{marginRight:"20px"}}>
      <div style={{ fontSize: "10px", color: " #bdbdbd" }}>
       Number of Warehouse
      </div>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        style={{
          border: "1px solid #bdbdbd",
          width: "200px",
          padding: "5px",
          borderRadius: "10px",
          marginBottom: "3rem",
        }}
      />
    </div>
   
    </div>
    <div className="upperdivborder"></div>
    <div style={{display:"flex" , justifyContent:"center"}}>
      <button
        style={{
          background: "#55B248",
          color: "white",
          border: "0",
          padding: "6px 10px",
          borderRadius: "10px",
        }}
      >
        Add New
      </button>
      </div>
    </form>
  );
};

export default AddUserForm;
