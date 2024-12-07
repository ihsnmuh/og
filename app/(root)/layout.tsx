import Footer from "@/components/Footer";
import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
