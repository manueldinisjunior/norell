import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
