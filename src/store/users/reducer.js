const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/toggleFavorite": {
      const index = state.favorites.indexOf(action.payload);
      if (index > -1) {
        const newFavList = [...state.favorites];
        newFavList.splice(index, 1);
        return {
          ...state,
          favorites: newFavList,
        };
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
