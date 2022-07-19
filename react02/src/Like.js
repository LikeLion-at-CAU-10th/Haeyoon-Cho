import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Box.css";
const Inner = ({ data }) => {
  const [like, setlike] = useState(false);
  const [color, setcolor] = useState("white");
  useEffect(() => (like ? setcolor("blue") : setcolor("white")), [like]);
  const d = {
    img: ["./img/햄깅1.png", "./img/햄깅2.png", "./img/햄깅3.png"],
    text: [
      "여름이지만 겨울잠에 빠지고 싶어...",
      "난 귀여운게 좋아 예를들면 꼬순내...",
      "주말에 뿌링클 시켜먹어야지...",
    ],
  };
  let index = 0;
  for (let x = 0; x < d.img.length; x++) {
    if (d.img[x] === data) {
      index = x;
      break;
    }
  }
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
