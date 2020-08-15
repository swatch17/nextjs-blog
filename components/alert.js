/*
 * @Author: Tan Dinbo
 * @Date: 2020-08-13 17:07:58
 */
import styles from "./alert.module.css";
import cn from "classnames";

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [style.success]: type === "success",
        [styles.error]: type === "errror",
      })}
    >
      {children}
    </div>
  );
}
