// import React from "react";
// import styles from "../MovieCard/MovieCard.module.css";

// import { FaCirclePlay } from "react-icons/fa6";
// import { BsPlusCircle } from "react-icons/bs";
// import { GoCheckCircleFill } from "react-icons/go";
// import { IoIosArrowDropdownCircle } from "react-icons/io";

// const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

// function MovieCard({ movie }) {
//   return (
//     <div className={styles.Manyofcard}>
//       {/* Main Image */}
//       <img
//         className={styles.postImg}
//         src={`${IMAGE_BASE}${movie?.poster_path}`}
//         alt={movie?.title}
//       />

//       {/* Hover Card */}
//       <div className={styles.hovercard}>
//         <img
//           className={styles.hoverImage}
//           src={`${IMAGE_BASE}${movie?.poster_path}`}
//           alt={movie?.title}
//         />

//         <div className={styles.badge}>Recently Added</div>

//         <div className={styles.buttonRow}>
//           <FaCirclePlay className={styles.iconbtn} size={40} />

//           <BsPlusCircle className={styles.iconbtn} size={40} />

//           <GoCheckCircleFill className={styles.iconbtn} size={40} />

//           <IoIosArrowDropdownCircle className={styles.circleBtn} size={40} />
//         </div>

//         <div className={styles.spanRow}>
//           <span className={styles.tag}>{movie?.adult ? "18+" : "U/A 16+"}</span>

//           <span className={styles.tag}>Movie</span>

//           <span className={styles.tag}>HD</span>
//         </div>
//         <div className={styles.list}>
//           {["Sci-Fi", "Thriller", "Action"].map((genre, index) => (
//             <span key={index}>
//               {genre}

//               {index < 2 && <span className={styles.dot}>•</span>}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;
import React from "react";
import styles from "../MovieCard/MovieCard.module.css";

import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  return (
    <div className={styles.Manyofcard}>
      <img
        className={styles.postImg}
        src={`${IMAGE_BASE}${movie?.poster_path}`}
        alt={movie?.title}
      />

      <div className={styles.hovercard}>
        <img
          className={styles.hoverImage}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt={movie?.title}
        />

        <div className={styles.badge}>Recently Added</div>

        <div className={styles.buttonRow}>
          <FaCirclePlay className={styles.iconbtn} size={40} />
          <BsPlusCircle className={styles.iconbtn} size={40} />
          <GoCheckCircleFill className={styles.iconbtn} size={40} />
          <IoIosArrowDropdownCircle className={styles.circleBtn} size={40} />
        </div>

        <div className={styles.hoverInfo}>
          <div className={styles.spanRow}>
            <span className={styles.tag}>
              {movie?.adult ? "18+" : "U/A 16+"}
            </span>
            <span className={styles.tag}>Movie</span>
            <span className={styles.tag}>HD</span>
          </div>

          <div className={styles.list}>
            {["Sci-Fi", "Thriller", "Action"].map((genre, index) => (
              <span key={genre}>
                {genre}
                {index < 2 && <span className={styles.dot}>•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
