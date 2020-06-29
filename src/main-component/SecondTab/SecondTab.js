import React, { useState } from "react";
import "../Maincomponent.css";
import AddNew from "./AddNew";
export default function SecondTab() {
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
        <div style={{display:"flex",height: "60px"}}>
          <div className="tab-heading">Payment Details</div>

          <div style={{ position:"absolute",right:"42px"}}>
            <button onClick={AddData} className="addbtn">AddNew</button>
          </div>
        </div>
      ) : (
        <div >
        <div style={{display:"flex",height: "60px"}}>
          <div className="tab-heading">Add New Payment Details</div>
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
