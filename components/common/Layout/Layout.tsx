import { FC, ReactNode } from "react";
import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";

import style from "./Layout.module.css";

type CompProps = {
  children: ReactNode;
};

const Layout: FC<CompProps> = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI();

  return (
    <div className="fit">
      <Navbar />
      <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
        <CartSidebar />
      </Sidebar>
      <main className={style.root}> {children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
