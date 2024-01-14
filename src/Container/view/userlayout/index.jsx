import React from "react";
import "./index.css";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import { useGlobalContext } from "../../context";
import { ImageProvider } from "../../Services/ImageProvider";

const UserLayout = ({ children }) => {
  const { user } = useGlobalContext();
  return (
    <div className="userLayoutWrapper">
      <header>
        <Header role={"user"} user={user} weblogo={ImageProvider.WebLogo} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default UserLayout;
