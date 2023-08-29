import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { software_product, dt_items_firstArr } from "../../helper/helper";

const Client = () => {
  return (
    <>
      <div className="info">
        <div style={{ color: "white" }} className="info__i">
          <div className="info__title">
            <h2>Check out more works by Geeks Invention</h2>
          </div>

          <div className="info__text">
            <p>
              Our case studies describe design and development solutions
              implemented at our Geeks Invention projects. The stories are a
              valuable resource for those looking to develop their own mobile
              apps.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ff5300",
          }}
        >
          <div
            style={{
              border: "1px solid #ff5300",
              borderRadius: "50px",
              fontSize: "1.2rem",
              cursor: "pointer",
              padding: "0.8rem 2rem",
              marginTop: "3rem ",
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              textAlign: "center",
            }}
            className="hoverBtn"
          >
            <span> See full case study</span>{" "}
            <span style={{ position: "relative", top: "0.2rem" }}>
              <BsArrowRight size={22} />
            </span>
          </div>
        </div>
      </div>
      <div className="Clients">
        <div className="client_title" style={{ color: "#fff" }}>
          <h3>Recent Clients</h3>
          <p>
            We worked with the Fortune 500 companies in the USA, Africa, UK,
            Middle East World's 4th Strongest Banking Brand, Automobile & IoT
            industry
          </p>
        </div>
        <div className="client_cards">
          {Array.from("123456789012").map((arrData, index) => {
            return (
              <div className="client_card">
                <div className="client_card_img">
                  <img
                    src="	https://geeksinvention.com/assets/v3/client/logo-ibm.webp"
                    alt=""
                  />
                </div>
                <div className="client_card_text">
                  <p className="client_card_text_title">Global Technology</p>
                  <p className="client_card_text_des">
                    From cloud computing to artificial intelligence, IBM's
                    cutting-edge technologies and expertise have helped
                    countless businesses stay ahead of the curve in today's
                    digital world.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="software_plateform">
        <div className="software_plateform_header_title">
          <h2>Software for modern platforms</h2>
        </div>
        <div className="software_plateform_plateform_text">
          <p>We develop applications for mobile, web, wearables, and TV.</p>
        </div>
        <div className="software_plateform_list">
          {software_product.map((software_product_data, index) => {
            return (
              <div
                className="software_plateform_list_group"
                key={software_product_data + index}
              >
                <div>
                  <img src={software_product_data.imgSrc} alt="" />
                </div>
                <span style={{ fontSize: "24px", lineHeight: "32px" }}>
                  {software_product_data.name}
                </span>
              </div>
            );
          })}
        </div>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ff5300",
        }}
      >
        <div
          style={{
            border: "1px solid #ff5300",
            borderRadius: "50px",
            fontSize: "1.2rem",
            cursor: "pointer",
            padding: "0.8rem 2rem",
            marginTop: "5rem ",
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",

            textAlign: "center",
            }}
            className="hoverBtn"
        >
          <span> See Our Tech stack</span>{" "}
          <span style={{ position: "relative", top: "0.2rem" }}>
            <BsArrowRight size={22} />
          </span>
        </div>
      </div>
      </div>
      <div className="dedicated-items">
        <div className="dt_title">
          <h2>Only Dedicated Items</h2>
        </div>
        <div className="dt_title_text">
          <p>We develop applications for mobile, web, wearables, and TV.</p>
        </div>
        <div className="dt_items_list">
          {dt_items_firstArr.map((dt_items_firstArr_data, index) => {
            return (
              <div
                className="dt_items_group_list"
                key={dt_items_firstArr_data + index}
              >
                <div>
                  <img src={dt_items_firstArr_data.imgSrc} alt="" />
                </div>
                <span style={{ fontSize: "24px", lineHeight: "32px" }}>
                  {dt_items_firstArr_data.name}
                </span>
              </div>
            );
          })}
        </div>
        <div className="dt_items_list">
          {dt_items_firstArr.map((dt_items_firstArr_data, index) => {
            return (
              <div
                className="dt_items_group_list"
                key={dt_items_firstArr_data + index}
              >
                <div>
                  <img src={dt_items_firstArr_data.imgSrc} alt="" />
                </div>
                <span style={{ fontSize: "24px", lineHeight: "32px" }}>
                  {dt_items_firstArr_data.name}
                </span>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ff5300",
          }}
        >
          <div
            style={{
              border: "1px solid #ff5300",
              borderRadius: "50px",
              fontSize: "1.2rem",
              cursor: "pointer",
              padding: "0.8rem 2rem",
              marginTop: "3rem ",
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              textAlign: "center",
            }} className="hoverBtn"
          >
            <span> See Our service</span>{" "}
            <span style={{ position: "relative", top: "0.2rem" }}>
              <BsArrowRight size={22} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
