import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);  
  const [isVerified, setIsVerified] = useState(false);  

  useEffect(() => {
    console.log({userInfo})
  },[userInfo])



  

  return (
    <AppContext.Provider value={{ userInfo, setUserInfo, isVerified, setIsVerified }}>
      {children}
    </AppContext.Provider>
  );
};
