import React, { useState } from "react";
import { allSites } from "../data/allSites";
import Card from "../HomePage/Card";
import Tab from "../HomePage/Tab";
import CustomButton from "../common/CustomButton";
const Home = () => {
  const [viewType, setViewType] = useState("One By One");


  const tabData = [
    {
      id: 1,
      tabName: "One By One",
      type: "One By One",
    },
    {
      id: 2,
      tabName: "All together",
      type: "All together",
    },
  ];

  const openAllLinks = () => {
    allSites.map((site) => {
      window.open(site.link, "_blank");
    });
  };
  return (
    <div className="flex justify-center items-center w-full ">
      <div className="flex-col flex justify-center items-center w-11/12 place-content-center place-items-center mt-5 gap-y-16 mb-12 ">
        {/* <Tab field={viewType} setField={setViewType} tabData={tabData}/> */}

        <div className={` grid lg:grid-cols-4 lg:gap-12 md:grid-cols-2 md:gap-5 sm:grid-cols-1 sm: gap-5 `}>
          {allSites.map((ele, index) => (
            <Card site={ele} key={index}></Card>
          ))}
        </div>
        <div className=" flex flex-col justify-center items-center h-full gap-y-6">
          <p className="text-2xl font-edu-sa font-semibold">
            {" "}
            Want to Open All the links?
          </p>
          <CustomButton
            active={true}
            onClick={openAllLinks}
            children={"Click Me"}
          >
            Click Me
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
