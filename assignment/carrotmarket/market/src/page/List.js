import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, Outlet } from "react-router-dom";

const StyledButton = styled.button`
  background-color: skyblue;
  border-radius: 20px;
  border: 0;
  margin: 2vh;
  padding: 1vh;
  outline: 0;
  cursor: pointer;
`;

const List = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      //async : promise로 만들어주는 역할
      setLoading(true);

      const response = await axios({
        method: "get",
        url: "https://0a8eecc7-f4b8-42a8-ad22-cf78a2b890c6.mock.pstmn.io/list",
        responseType: "json",
      }).then(function (response) {
        setMembers(response.data);
        setLoading(false);
      });
    };
    fetchData();
  }, []);

  console.log(members);

  if (loading) {
    return <h1>로딩 중</h1>;
  }

  if (!members) {
    return null;
  }

  const handleClick = (url, id) => {
    navigate(url, { state: members[id - 1] });
  };

  return (
    <>
      {members.map((member) => (
        <StyledButton
          onClick={() => handleClick(`/${member.memId}`, member.memId)}
          key={member.memId}
        >
          {member.name}
        </StyledButton>
      ))}
      <Outlet />
    </>
  );
};

export default List;
