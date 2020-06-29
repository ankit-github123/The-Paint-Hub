import React, { useState } from "react";
import "../Maincomponent.css";
import AddNew from "./AddNew";
import Table from "../table-component/Table"
export default function FirstTab() {
  const [data, setData] = useState({
    add: false,
  });

  const AddData = () => {
    setData({ ...data, add: true });
  };
  const SaveData = () => {
    setData({ ...data, add: false });
  };
  return (
    <div style={{ padding: "25px" }}>
      {!data.add ? (
        <div style={{display:"block"}}>
        <div style={{display:"flex",height: "60px"}}>
          <div className="tab-heading">Customer Details</div>

          <div style={{ position:"absolute",right:"42px"}}>
            <button onClick={AddData} className="addbtn">AddNew</button>
          </div>
          
        </div>
        <div className="col-lg-12 col-md-12"><Table/></div>
        </div>
      ) : (
        <div >
        <div style={{display:"flex",height: "60px"}}>
          <div className="tab-heading">Add New Vendor Details</div>
          <div style={{ position:"absolute",right:"42px"}}>
            <button onClick={SaveData} className="savebtn">Save</button>
          </div>
          </div>
         <AddNew />
        </div>
      )}
      <div></div>
    </div>
  );
}
