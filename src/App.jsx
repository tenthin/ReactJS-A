import React from "react";
import Lokesh from "./Components/Lokesh";

const App = () => {
  let x = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      {/* <Lokesh abc={55} pawan={"FREE TIBET"}/> */}
      {x.map((ele) => {
        // console.log(ele)
        return <Lokesh number={ele} />;
      })}
    </>
  );
};

export default App;
