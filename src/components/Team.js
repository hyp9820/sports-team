import React, { useContext } from "react";
import { OneTeam } from "./OneTeam";
import { GlobalContext } from "../context/GlobalState";

function Team() {
  const { teams } = useContext(GlobalContext);

  return (
    <>
      <ul id="list" className="list">
        {teams.map((team) => (
          <OneTeam key={team.id} team={team} />
        ))}
      </ul>
    </>
  );
}

export default Team;
