import React from "react";
import "./Header.css"

import Maincomponent from "../main-component/Maincomponent"
export default function Headers(){
return(
    <div>
        <div className="head">
        <button className="headButton home">Home</button>
        <input className="headButton document" type="file" name=""  />
        <button className="headButton logout">Logout</button>
        </div>
       <Maincomponent/>
    </div>
)
} 
