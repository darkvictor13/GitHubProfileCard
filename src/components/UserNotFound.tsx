import React from "react";
import Image from "next/image";
import styles from "../styles/UserCard.module.css";

function UserNotFound() {
  return (
    <a className={styles.card}>
      <h1>Not found</h1>
    </a>
  );
}

export default UserNotFound;