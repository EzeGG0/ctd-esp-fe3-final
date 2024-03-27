import { createContext } from "react";
import { useReducer } from "react";
import reducer from "./reducer";

export const initialState = {
  theme: "light",
  data: [],
  dentist: {},
  favorites: []
}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleThemeChange = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch({ type: "FETCH_DATA", payload: data });
  };


  const handleAddFavorite = (item) => {
    dispatch({ type: "ADD_FAVORITE", payload: item });
  };


  const value = { state, handleThemeChange, fetchData, handleAddFavorite };

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
