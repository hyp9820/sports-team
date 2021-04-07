import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button } from "react-bootstrap";

export const OneTeam = ({ team }) => {
  const { deleteTeam } = useContext(GlobalContext);

  return team.agebracket === "adult" ? (
    <>
      <li className={team.agebracket}>
        <span>
          <h4>{team.name}</h4>
          Age Bracket: {team.agebracket} <br />
          Gender: {team.gender}
        </span>
        <span className="right">
          Age: {team.age_range}
          <br />
          Skills: {team.skills.map((s) => "🔸" + s)}
        </span>
        <Button
          variant="danger"
          className="delete-btn"
          onClick={() => deleteTeam(team.id)}
        >
          X
        </Button>
      </li>
    </>
  ) : (
    <>
      <li className={team.agebracket}>
        <span>
          <h4>{team.name}</h4>
          Age Bracket: {team.agebracket}
        </span>
        <span className="right">
          Age: {team.age_range}
          <br />
          Skills: {team.skills.map((s) => "🔸" + s)}
        </span>
        <Button
          variant="danger"
          className="delete-btn"
          onClick={() => deleteTeam(team.id)}
        >
          X
        </Button>
      </li>
    </>
  );
};
