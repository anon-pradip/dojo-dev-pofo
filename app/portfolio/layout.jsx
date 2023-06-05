import React from "react";

const Layout = ({ children }) => {
  return (
    <div className=" self-start">
      <p className="text-7xl mt-14 text-slate-400 font-bold">Our Works</p>
      {children}
    </div>
  );
};

export default Layout;
