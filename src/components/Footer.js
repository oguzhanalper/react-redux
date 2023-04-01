import React from "react";
import { setLanguage } from "../store/site";
import { useDispatch, useSelector } from "react-redux";

function Footer() {
  const dispatch = useDispatch();
  const { dark, language } = useSelector((state) => state.site);
  const languages = ["tr", "en"];
  const handleChange = (lang) => {
    dispatch(setLanguage(lang));
  };
  return (
    <div className="top">
      <div>
        {languages.map((lang, index) => (
          <button onClick={() => handleChange(lang)} key={index}>
            {lang}
          </button>
        ))}
        <div>
          <span className="made">Made By O6A</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
