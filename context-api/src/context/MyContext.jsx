import { createContext, useState } from "react";

export const MyStore = createContext();
console.log(MyStore);

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState("This is from context.");
  return <MyStore.Provider value={data}>{children}</MyStore.Provider>;
};
