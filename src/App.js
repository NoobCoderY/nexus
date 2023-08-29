import Home from "./Component/Home";
import React, { useEffect } from "react";

function App() {
  const [backGroundColor, setbackGroundColor] = React.useState("rgb(35, 37, 44)")
  useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolled by 1 pixel', window.scrollY);
      console.log(backGroundColor);
      if (window.scrollY > 895 && window.scrollY<1600)
      {
         setbackGroundColor("#3f2caa")
      }
      else if (window.scrollY >1600 && window.scrollY<2300)
      {
         setbackGroundColor("rgba(1, 181, 172, 0.9)")
      }
      else {
        setbackGroundColor("rgb(35, 37, 44)")
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="App" style={{backgroundColor:`${backGroundColor}`}}>
      <Home backGroundColor={ backGroundColor} setbackGroundColor={setbackGroundColor} />
    </div>
  );
}

export default App;
