import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Raju from "./Pages/Raju";
import Lokesh from "./Components/Lokesh";
import Home from "./Pages/Home";

const App = () => {
  // let x = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  // let x = [
  //   {
  //     title: "Smiling Face with Smiling Eyes ",
  //     emoji:
  //       "",
  //     description: "A classic emoji expressing happiness and joy.",
  //   },
  //   {
  //     title: "Thinking Face ",
  //     emoji:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDQbdfQepfnqBSeJKxbFKRrS6G_YJxu0vhw&s",
  //     description:
  //       "Used when contemplating something or expressing uncertainty.",
  //   },
  //   {
  //     title: "Party Popper ",
  //     emoji:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDQbdfQepfnqBSeJKxbFKRrS6G_YJxu0vhw&s",
  //     description:
  //       "Celebratory emoji for parties, achievements, or any festive occasion.",
  //   },
  //   {
  //     title: "Cat Face with Tears of Joy ",
  //     emoji:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDQbdfQepfnqBSeJKxbFKRrS6G_YJxu0vhw&s",
  //     description:
  //       "Laughing so hard you're crying. Perfect for hilarious situations.",
  //   },
  //   {
  //     title: "Slightly Smiling Face ",
  //     emoji:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDQbdfQepfnqBSeJKxbFKRrS6G_YJxu0vhw&s",
  //     description: "A more subtle smile conveying contentment or friendliness.",
  //   },
  // ];
  return (
    <>
      {/* <Lokesh abc={55} pawan={"FREE TIBET"}/> */}
      {/* {x.map((ele) => {
        return <Lokesh number={ele} />;
      })} */}

      {/* <div className="flex justify-center gap-2">
        {x.map((ele,index) => {
          return (
            <Lokesh
            key={index}
              title={ele.title}
              image={ele.emoji}
              description={ele.description}
            />
          );
        })}
      </div> */}

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/raju" element={<Raju/>}></Route>
        <Route exact path="/lokesh" element={<Lokesh/>}></Route>
      </Routes>
      </BrowserRouter>



    </>
  );
};

export default App;
