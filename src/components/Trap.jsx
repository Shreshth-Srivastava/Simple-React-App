import React, { useState } from "react";

const Trap = ({ setTrap }) => {
    const [text, setText] = useState("Don't Click Here")

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-1/2 h-1/2 p-4">
        <p className="text-xl">
          Hmmmmmm so, you are someone who doesn't follow instructions well, Hmmmmmmmm....... alright since you are here click on the green button to proceed to a simple react app
        </p>
        <div className="py-4 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
          <button 
          onClick={()=>{
                setTrap(false);
            }}
          className="bg-green-500 rounded p-4 cursor-pointer hover:bg-green-700">
            Click Here
          </button>
          <a
            href="https://youtu.be/dQw4w9WgXcQ?si=U3lJZ5BMDvO2GIwG"
            target="_blank"
          >
            <button 
            onClick={()=>{
                setText("🫵😂 Ha! RickRolled ya")
            }}
            className="w-full bg-red-500 rounded p-4 cursor-pointer hover:bg-red-700">
              {text}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Trap;
