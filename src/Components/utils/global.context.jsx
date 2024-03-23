import { createContext } from "react";
import axios from 'axios';
import { useReducer } from "react";
import reducer from "./reducer";
import { useEffect } from "react";

export const initialState = {
  theme: "light",
  data: [],
  dentist: {}
}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleThemeChange = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch({ type: "FETCH_DATA", payload: data });
  };

  const fetchDentist = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const dentist = await response.json();
    dispatch({ type: "FETCH_DENTIST", payload: dentist });
  };

  const handleAddFavorite = (item) => {
    dispatch({ type: "ADD_FAVORITE", payload: item });
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites) {
      dispatch({ type: "ADD_FAVORITE", payload: favorites });
    }
  }, []);

  const value = { state, handleThemeChange, fetchData, fetchDentist, handleAddFavorite };

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
