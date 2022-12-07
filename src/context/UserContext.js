import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../utils/Firebase";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  // export const useUser = React.Context(UserContext);
  let initialValue = null;
  let initialCategories = null;
  try {
    initialValue = JSON.parse(window.localStorage.getItem("user"));
    initialCategories = JSON.parse(window.localStorage.getItem("config"));
  } catch (error) {
    console.log(error);
  }
  const [user, setUser] = useState(initialValue);
  const [config, setConfig] = useState(initialCategories);

  useEffect(() => {
    if (user) {
      getConfig();
      getUser();
    }
  }, []);

  const getConfig = async () => {
    const docRef = doc(db, "config", "categories");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Config data:", docSnap.data());
      const data = {
        ...docSnap.data(),
      };
      setConfig(data);
      window.localStorage.setItem("config", JSON.stringify(data));
    }
  };

  const getUser = async () => {
    const docRef = doc(db, "users", user.userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Config data:", docSnap.data());
      const data = {
        userId: docSnap.id,
        ...docSnap.data(),
      };
      setUser(data);
      window.localStorage.setItem("user", JSON.stringify(data));
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, config }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
