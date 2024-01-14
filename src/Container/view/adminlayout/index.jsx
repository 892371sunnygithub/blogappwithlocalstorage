import Sidebar from "../../Common/Sidebar";
import Header from "../../Common/Header";
import { useGlobalContext } from "../../context";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";
import Footer from "../../Common/Footer";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
const AdminLayout = ({ children }) => {
  const { user } = useGlobalContext();
  const [togelMenu, setTogelMenu] = useState(false);
  const togelHandler = () => {
    setTogelMenu(!togelMenu);
  };

  return (
    <div className="adminLayoutWrapper">
      <aside className={`${togelMenu ? "sidebarTogel" : ""}`}>
        <Sidebar setTogelMenu={setTogelMenu} togelMenu={togelMenu} />
      </aside>
      <div className={`innerData ${togelMenu ? "togelInner" : ""}`}>
        <header>
          <Header
            role={"admin"}
            user={user}
            burgermenu={
              togelMenu ? (
                <FaWindowClose className="text-danger" />
              ) : (
                <GiHamburgerMenu />
              )
            }
            togelHandler={togelHandler}
          />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
