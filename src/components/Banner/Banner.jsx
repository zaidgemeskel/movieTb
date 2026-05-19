import React from "react";
import styles from "../Banner/Banner.module.css";
import Netflixlogo from "../../assets/image/logo.png";
import { Play } from "lucide-react";
import { AlertCircle } from "lucide-react";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.contents}>
        {/* image Netflix */}
        <img
          className={styles.logoImg}
          src={Netflixlogo}
          alt="banerlogo image"
        />
        {/* heading part */}
        <h1 className={styles.title}>Bridgerton</h1>
        {/* parahraph text */}
        <p className={styles.description}>
          Shondaland's Emmy-winning series brings Julia Quinn's novelsto life as
          eight sibling seektheir perfect match amid London's scandals and so
          irees.
        </p>
        <div className={styles.btnContainer}>
          <button className={styles.btn}>
            <Play size={30} />
            Play
          </button>
          <button className={styles.btn}>
            <AlertCircle size={30} />
            Mylist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
