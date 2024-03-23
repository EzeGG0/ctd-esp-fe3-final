const reducer = (state, action) => {
    let favorites;
    switch (action.type) {
        case "CHANGE_THEME":
            return { ...state, theme: state.theme === "light" ? "dark" : "light" };
        case "FETCH_DATA":
            return { ...state, data: action.payload };
        case "FETCH_DENTIST":
            return { ...state, dentist: action.payload };
        case "ADD_FAVORITE":
            favorites = [...state.favorites, action.payload];
            localStorage.setItem("favorites", JSON.stringify(favorites));
            return { ...state, favorites };
      default:
        return state;
    }
  };

  export default reducer;