import React from "react";

const Layout = ({ children, className = " " }) => {
  return (
    <div className="w-full bg-sky-200/10">
      <div className={`${className} md:max-w-[1480px] max-w-[400px] m-auto`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
