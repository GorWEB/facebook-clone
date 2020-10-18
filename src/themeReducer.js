const initialState = {
  theme:localStorage.getItem('theme')==="dark"?"dark":'light'
};
const SWITCH_THEME = "SWITCH_THEME";

export const switchTheme = (theme) => {
  return {
    type: SWITCH_THEME,
    theme,
  };
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};
export const dark = {
  name: "dark",
  colors: {
    background: "black",
    primary: "gray",
    body: "white",
  },
};

export default themeReducer;
