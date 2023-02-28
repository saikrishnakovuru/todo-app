import {createContext, useContext, useState} from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// export function useAuth(){
//   return useContext(AuthContext);
// }
export const AuthProvider = ({children}) => {

  const [number, setNumber] = useState(10);
  const [isAuthenticated, setAuthenticated] = useState(false);

  function login(userName, password) {
    if (userName === 'sai' && password === 'sai') {
      setAuthenticated(true);
      return true;
    } else {
      setAuthenticated(false);
      return false;
    }
  }

  function logout(){
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{number, isAuthenticated,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}