import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/Thing";

const AboutWhom = () => {
  const a = useParams();
  const nickname = a.nickname;

  const who = data.members.filter((member) => member.nickname === nickname)[0];

  return (
    <>
      <div>About {who.name}</div>
      <div>{who.memId}</div>
      <div>{who.explanation}</div>
      <div>{who.nickname}</div>
    </>
  );
};

export default AboutWhom;
