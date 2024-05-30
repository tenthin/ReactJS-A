import React from "react";
import { Link } from "react-router-dom";

const Lokesh = (props) => {
  // console.log(props.abc)
  // console.log(props.pawan)
  // console.log(props)

  // <DESTRUCTURING>
  //   let { abc, pawan } = props
  //   console.log(abc)
  //   console.log(pawan)

  return (
    //   <div>Lokesh {pawan+" "+pawan} {abc}</div>
    // <div>
    //   <h1>{props.number}</h1>
    // </div>
    <>
      {/* <div className="w-96 h-96 shadow-2xl border-slate-300 border-2">
        <img
          src={props.image?props.image:"/sport-equipment-concept.avif"} //if there is no image in the array, then this image will be displayed
          alt="tenzin"
          className="h-52 w-full object-cover"
        />
        <h1 className="text-center">{props.title}</h1>
        <p className="text-center">{props.description}</p>
      </div> */}
      <div className="flex flex-col">
        <h1>Free Tibet Free Tibet</h1>

        <Link to="/">Home</Link>
        <Link to="/raju">I am Raju</Link>
        <Link to="/lokesh">I am Lokesh</Link>
      </div>
    </>
  );
};

export default Lokesh;
