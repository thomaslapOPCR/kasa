import React, { createContext, useContext, useEffect, useState } from "react";

const TitleContext = createContext("");

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title; //Actions
  }, [title]);// dependance

  return (
    <TitleContext.Provider value={setTitle}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = () => useContext(TitleContext);

export const getPageName = (url) => {
  const name = url.split("/").filter((item) => item !== "");
  if(name.length > 0 ) {
    return name[0];
  } else {
    return "Home";
  }
};