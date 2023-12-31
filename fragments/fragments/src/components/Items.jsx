import { useState } from "react";
import styles from "./Item.module.css";
const Items = ({ foodItems }) => {
  const [cls, setCls] = useState("");
  const checked = (event) => {
    if (!event.target.offsetParent.className.includes("active")) {
      setCls("active");
      console.log(`you followed ${foodItems}`);
    } else {
      setCls("");
      console.log(`you unfollowed ${foodItems}`);
    }
  };
  return (
    <li className={`${styles["kg-item"]} list-group-item ${cls}`}>
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button
        className={`${styles.addFriend}  btn-info`}
        onClick={(e) => checked(e)}>
        follow
      </button>
    </li>
  );
};
export default Items;
// props
