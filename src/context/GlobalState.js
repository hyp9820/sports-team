import React, { createContext, useReducer } from "react";
// import AppReducer from "./AppReducer";

// Initial State

const initialState = {
  teams: [
    {
      id: 1,
      name: "India",
      agebracket: "adult",
      gender: "Men",
      age_range: 40,
      skills: ["A", "AA", "Masters"],
    },
    {
      id: 2,
      name: "West Indies",
      agebracket: "junior",
      age_range: "13-U",
      skills: ["Gold", "Club", "High School"],
    },
    {
      id: 3,
      name: "Australia",
      agebracket: "adult",
      gender: "Women",
      age_range: 50,
      skills: ["A", "AAA", "Master"],
    },
    {
      id: 4,
      name: "England",
      agebracket: "junior",
      age_range: "15-U",
      skills: ["Sliver", "Club", "Bronze"],
    },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// App Reducer
const AppReducer = (state, action) => {
  switch (action.type) {
    case "INSERT_TEAM":
      return {
        ...state,
        teams: [action.payload, ...state.teams],
      };
    case "DELETE_TEAM":
      return {
        ...state,
        teams: state.teams.filter((team) => team.id !== action.payload),
      };
    default:
      return state;
  }
};

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTeam(id) {
    dispatch({
      type: "DELETE_TEAM",
      payload: id,
    });
  }

  function insertTeam(team) {
    dispatch({
      type: "INSERT_TEAM",
      payload: team,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        teams: state.teams,
        deleteTeam,
        insertTeam,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
