import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Outlet } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await axios({
        method: "get",
        url: "https://b669a370-9262-40ff-95e9-79eeebc46c11.mock.pstmn.io/list",
        responseType: "json",
      }).then(function (response) {
        setData(response.data);
        setLoading(false);
      });
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <div className={out.products}>
        {data.map((data) => (
          <div
            className={out.product}
            onClick={() => {
              navigateClick(`/${name}`, name);
            }}
          >
            <img src={img} alt=""></img>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default List;
