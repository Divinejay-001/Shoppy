import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);  
  const [isVerified, setIsVerified] = useState(false);  

  // useEffect(() => {
  //   console.log("Updated userInfo:", userInfo); // ✅ Now logs after state update
  // }, [userInfo]);

 

  // Function to fetch user info if token exists
  // const fetchUserInfo = async () => {
  //   try {
  //     const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/getUser`, {
  //       method: "GET",
  //       credentials: "include", // Ensures the cookie is sent
  //     });

  //     const data = await response.json();
  //     console.log("API Response:", data); // ✅ Check if API returns correct data

  //     if(data.success) {
  //       setUserInfo(data.user);     
  //       console.log('runing test')  
  //       console.log('runing >>', data.user) 
  //       toast.success(data.message)
  //     } else {
  //       setUserInfo(null);
  //     }
  //   } catch (error) {
  //     setUserInfo(null);
  //   }
  // };

  // // Run once on mount to check if user is already logged in
  // useEffect(() => {
  //   console.log("Fetching user info on mount...");
  //   fetchUserInfo();
  // }, []);

  return (
    <AppContext.Provider value={{ userInfo, setUserInfo, isVerified, setIsVerified }}>
      {children}
    </AppContext.Provider>
  );
};
