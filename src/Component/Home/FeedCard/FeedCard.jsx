import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";

// 
const FeedCard = (props) => {
  console.log();
  return (
    <div
      style={{
        // backgroundColor: `${props.feedCardArrData.color}`,
        height: "130vh",
        paddingTop: "8rem",
        paddingLeft: "4rem",
        paddingRight: "4rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" ,flexDirection:props.index%2===0?"row":"row-reverse" }}>
        <motion.div
          initial={{ y: 1000 }} // Initial position above the viewport
          animate={{ y: 0 }} // Final position at the original 
          transition={{ duration: 1 }} // Animation duration
          className="fisrt_child"
        >
          <h3>{ props.feedCardArrData.text}</h3>
          <p>{ props.feedCardArrData.subText}</p>
          <div className="three_boxes">
            <div className="first_box">{ props.feedCardArrData.keyPoint[0]}</div>
            <div className="second_box">{ props.feedCardArrData.keyPoint[1]}</div>
            <div className="third_box">{ props.feedCardArrData.keyPoint[2]}</div>
          </div>
          <div className="content">
            <p>
            {props.feedCardArrData.content}
            </p>
          </div>
          <div
            style={{
              border: "1px solid white",
              borderRadius: "50px",
              fontSize: "1rem",
              cursor: "pointer",
              padding: "1rem 1.3rem",
              width: "37%",
              marginTop: "3rem",
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
            }}
          >
            <span> See full case study</span>{" "}
            <span style={{ position: "relative", top: "0.2rem" }}>
              <BsArrowRight size={22} />
            </span>
          </div>
        </motion.div>
        <div className="second_child" style={{padding: "30px 0" ,flexBasis:props.index%2===0?"50%":"44%"}}>
        <img style={{maxWidth:"100%",height:"100%"}}
        src={props.feedCardArrData.imgsrc}
        alt=""
      />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
