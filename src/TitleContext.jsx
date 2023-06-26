import React, { createContext, useContext, useEffect, useState } from "react";

const TitleContext = createContext("");

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <TitleContext.Provider value={setTitle}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = () => useContext(TitleContext);

export const getPageName = (pathname) => {
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  return pathSegments.length > 0 ? pathSegments[0] : "Home";
};