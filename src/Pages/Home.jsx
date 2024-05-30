import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import { PlusSignIcon, MinusSignIcon } from "hugeicons-react";

const Home = () => {

//   const [data, setdata] = useState(100);
//   const [raju, setraju] = useState("Tenzi Free Tibet");
//   const [food, setfood] = useState({ fruits: "", veg: "" });

//   const ram = () => {
//     setdata(110);
//     setraju("FREE TIBET");
//     setfood({ fruits: "apple", veg: "carrot" });
//   };

//   const hanuman = () => {
//     setdata(150);
//     setraju("FREE INDIA");
//     setfood({ fruits: "tomato", veg: "potato" });
//   };


const[addtocart,setaddtocart] = useState(0)
const increment =()=>{
    setaddtocart((prev)=>prev+1)
}

const decrement=()=>{
    setaddtocart((prev)=>prev-1)
}
  return (
    <>
      {/* <div className='flex flex-col'>
        <Link to="/">Home</Link>
        <Link to="/raju">I am Raju</Link>  
        <Link to="/lokesh">I am Lokesh</Link>
    </div> */}

      {/* <button
        type="button"
        className="bg-purple-500 ring-2 ring-black text-3xl text-white"
        onClick={ram}
      >
        Ram
      </button>
      <button
        type="button"
        className="bg-purple-500 ring-2 ring-black text-3xl text-white"
        onClick={hanuman}
      >
        Hanuman
      </button>
      <h1 className="text-8xl">{data} {raju}</h1>
      <h1 className="text-8xl">{food.fruits} {food.veg}</h1> */}
      <div className="flex items-center">
        <button type="button" onClick={increment} disabled={addtocart===5?true:false} className={`bg-purple-500 ${addtocart===5?"bg-black":"bg-purple-500"}`}>
          <PlusSignIcon size={24} color={"#000000"} variant={"stroke"} />
        </button>
        <input
          type="text"
          id="text"
          name="text"
          disabled
          className="w-10 border-2 border-black py-1"
          value={addtocart}
        />
        <button type="button" onClick={decrement} disabled={addtocart===0?true:false} className={`bg-purple-500 ${addtocart===0?"bg-black":"bg-purple-500"}`}>
          <MinusSignIcon size={24} color={"#000000"} variant={"stroke"} />
        </button>
      </div>
    </>
  );
};

export default Home;
