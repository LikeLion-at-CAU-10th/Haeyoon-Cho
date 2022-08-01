import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Box.css";
const Inner = ({ data }) => {
  const [like, setlike] = useState(false);
  const [color, setcolor] = useState("white");
  useEffect(() => (like ? setcolor("blue") : setcolor("white")), [like]);

  return (
    <div className={styles.container}>
      <div>{d.text[index]} ❤️❤️</div>
      <div className={styles.mark}>
        <button
          className={styles.like}
          onClick={() => {
            like ? setlike(false) : setlike(true);
          }}
          style={{
            width: "60px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: `${color}`,
            color: "black",
            borderStyle: "dashed",
          }}
        >
          짱좋
        </button>
      </div>
    </div>
  );
};

export default Like;
