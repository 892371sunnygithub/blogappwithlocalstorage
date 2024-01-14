import { createContext, useContext, useEffect, useState } from "react";
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const LogoutHandler = () => {
    setUser(null);
    localStorage.removeItem("login");
  };
  const AuthDataHandler = (authData) => {
    localStorage.setItem("login", JSON.stringify(authData));
    setUser(authData);
  };

  const getFormDataFromLocalStorage = () => {
    const formDataArray =
      JSON.parse(localStorage.getItem("formDataArray")) || [];
    return formDataArray;
  };
  const getBlogsDataFromLocalStorage = () => {
    const blogDataArray =
      JSON.parse(localStorage.getItem("blogDataArray")) || [];
    return blogDataArray;
  };
  const data = JSON.parse(localStorage.getItem("login"));
  useEffect(() => {
    setUser(data);
  }, []);

  return (
    <AppContext.Provider
      value={{
        user: user,
        blogs: blogs,
        setBlogs: setBlogs,
        getBlogsDataFromLocalStorage: getBlogsDataFromLocalStorage,
        setUser: setUser,
        LogoutHandler: LogoutHandler,
        AuthDataHandler: AuthDataHandler,
        getFormDataFromLocalStorage: getFormDataFromLocalStorage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
