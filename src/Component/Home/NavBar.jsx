import React, { useMemo } from "react";

const NavBar = ({backGroundColor}) => {
  const [selectMenu, setselectMenu] = React.useState(0);

  const menuItems = useMemo(
    () => [
      {
        title: "HOME",
      },
      {
        title: "WORKS",
      },
      {
        title: "TECHNOLOGIES",
      },
      {
        title: "SERVICES",
      },
      {
        title: "COMPANY",
      },
      {
        title: "CONTACT US",
      },
    ],
    []
  );

  return (
    <div className="navbar" style={{backgroundColor:`${backGroundColor}`}}>
      <div className="logo">
        <img
          src="https://geeksinvention.com/assets/v2/content/geeks-logo-white.svg"
          alt=""
        />
      </div>
      <div className="nav-items" style={{ color: "white" }}>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {menuItems.map((menuitems, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setselectMenu(index);
                }}
              >
                <li>{menuitems.title}</li>
                {index === selectMenu && (
                  <div
                    style={{ height: "1px", border: "1px solid #f16522" }}
                  ></div>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
