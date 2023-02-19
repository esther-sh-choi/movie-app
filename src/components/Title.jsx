import React from "react";

import "./Title.scss";

const Title = ({ children }) => {
  return <h1 className="page-title">{children}</h1>;
};

export default Title;
