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

export const getPageName = (url) => {
  const name = url.split("/").filter((item) => item !== "");
  return name.length > 0 ? name[0] : "Home";
};