import React, { useState } from "react";
import "./Maincomponent.css";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import FirstTab from "./FirstTab/FirstTab";
import SecondTab from "./SecondTab/SecondTab";
export default function Maincomponent() {
  const [data, setData] = useState({
    show: false,
    showpay: false,
  });

  const showData = () => {
    setData({ ...data, show: !data.show ,showpay:false});
  };
  const showpayData = () => {
    setData({ ...data, showpay: !data.showpay, show: false });
  };
  return (
    <div className="row">
      <div className="App">
        <Tabs defaultTab="vertical-tab-one" vertical>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12 maintab">
            <TabList>
              <div className="data-heading">Data Input</div>
              <Tab tabFor="vertical-tab-one">
                <button
                  onClick={showData}
                  className="tabshowbtn"
                  style={{ border: "0", background: "transparent" }}
                >
                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                <i
                  class="fa fa-home fahome"
                  style={{ fontSize: "18px", color: "" }}
                ></i>
</div>
<div className="col-lg-8 col-md-8 col-sm-8 col-8"> Add Profile Information</div>
                 
                </button>
                {data.show ? <div className="bg_white"style={{color:"#BDBDBD",fontWeight:"500"}}><span style={{marginRight:"10px"}}>>></span>Customer detail</div> : ""}
              </Tab>

              <Tab tabFor="vertical-tab-two">
                <button
                  onClick={showpayData}
                  className="tabshowbtn"
                  style={{ border: "0", background: "transparent" }}
                >
                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                <i
                  class="fa fa-home fahome"
                  style={{ fontSize: "18px", color: "" }}
                ></i>
</div>
<div className="col-lg-8 col-md-8 col-sm-8 col-8">Payment transactions</div>
                  
                </button>
                {data.showpay ? <div className="bg_white" style={{color:"#BDBDBD",fontWeight:"500"}}><span style={{marginRight:"10px"}}>>>></span>Payment from customers</div> : ""}
                
              </Tab>

              <div className="data-heading">Reports</div>
              <Tab tabFor="vertical-tab-three">
              <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                <i
                  class="fa fa-home fahome"
                  style={{ fontSize: "18px", color: "" }}
                ></i>
</div>
<div className="col-lg-8 col-md-8 col-sm-8 col-8">
                Payment Reports
                </div>
              </Tab>
            </TabList>
          </div>
          <div
            className="col-lg-9 col-md-9 col-sm-12 col-12"
            style={{ background: "#F9F9FF" }}
          >
            <TabPanel tabId="vertical-tab-one">
              <div>
                <FirstTab />
              </div>
            </TabPanel>
            <TabPanel tabId="vertical-tab-two">
             <div>
             <SecondTab/>
             </div>
            </TabPanel>
        {/*<TabPanel tabId="vertical-tab-three">
            <p>Tab 3 content</p>
  </TabPanel>*/}
          </div>
        </Tabs>
      </div>
    </div>
  );
}
