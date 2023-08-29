import React from "react";

const Canvas = () => {
  return (
    <div
      style={{
        background: "#16181c",
        height: "100vh",
        width: "100%",
        // backgroundImage: `url(https://geeksinvention.com/assets/v2/general/bg-index-intro-92b4c7f74791ac3a1483e0b8956615d7.png)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        zIndex:"1"
      }}
      className="canvas"
      >
          <div className="slogan">
              <h1>EMBARACE THE FUTURE</h1>
              <p>Welcome to the Age of Action</p>
          </div>
      </div>
  );
};

export default Canvas;
