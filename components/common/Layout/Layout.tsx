import React, { FC } from "react";

type CompProps = {
 children: React.ReactNode;
};

const Layout: FC<CompProps> = ({ children }) => {
  return <div className="layout"> {children}</div>;
};

export default Layout;
