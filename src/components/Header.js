import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const { dark, language } = useSelector((state) => state.site);
  //   console.log(site);

  return (
    <div className="header">
      {/* <div>Dark mod: {dark ? "yes" : "no"}</div> */}
      <div className={language === "tr" ? "active" : "passive"}>
        {" "}
        Language mod: {language}
      </div>
    </div>
  );
}

export default Header;
