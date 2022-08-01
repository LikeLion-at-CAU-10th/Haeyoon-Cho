import Like from "./Like";
import Imgset from "./Imgset";
import styles from "./Box.css";
function App() {
  const data = {
    img: ["./img/햄깅1.png", "./img/햄깅2.png", "./img/햄깅3.png"],
    text: [
      "여름이지만 겨울잠에 빠지고 싶어...",
      "난 귀여운게 좋아 예를들면 꼬순내...",
      "주말에 뿌링클 시켜먹어야지...",
    ],
  };
  return (
    <div className={styles.App}>
      {data.img.map((i, x) => (
        <div className={styles.box}>
          <Imgset img={i} key={x}></Imgset>
          <div className={styles.inner}>
            <Like data={i} key={i} className={styles.inner}></Like>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
