import { INSERT_TEAM, DELETE_TEAM } from "./Actions";

// App Reducer
const AppReducer = (state, action) => {
  switch (action.type) {
    case INSERT_TEAM:
      return {
        ...state,
        teams: [action.payload, ...state.teams],
      };
    case DELETE_TEAM:
      return {
        ...state,
        teams: state.teams.filter((team) => team.id !== action.payload),
      };
    default:
      return state;
  }
};

export default AppReducer;
