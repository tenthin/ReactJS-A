import React from "react";

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
    <div>
      <h1>{props.number}</h1>
    </div>
  );
};

export default Lokesh;
