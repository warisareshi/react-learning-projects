import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="p-4 flex flex-col gap-1.5">
        <p className="text-xl text-black bg-white py-5 pl-5 rounded-md w-96">
          <span className="font-bold">This is the bgChanger</span> <br />
          Right now, this is the{" "}
          <span style={{ color: color }}>{color} color</span>
        </p>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
            onClick={() => setColor("orange")}
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
