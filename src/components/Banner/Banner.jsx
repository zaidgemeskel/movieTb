import React, { useEffect, useState } from "react";
import styles from "../Banner/Banner.module.css";
import Netflixlogo from "../../assets/image/logo.png";
import { Play } from "lucide-react";
import { AlertCircle } from "lucide-react";
import { movieInstance } from "../../Utility/Movieinstance";
import request from "../../Utility/requestUrl";

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState(null);

  // fetch banner movie
  useEffect(() => {
    fetchBannerMovie();
  }, []);

  // async await
  const fetchBannerMovie = async () => {
    try {
      const response = await movieInstance.get(request.fetchNetflixOriginals);

      // movie array
      const movies = response.data.results;

      // random movie
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];

      // save into state
      setMovie(randomMovie);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: movie?.backdrop_path
          ? `linear-gradient(
              to top,
              rgba(0,0,0,0.9),
              rgba(0,0,0,0.3),
              rgba(0,0,0,0.2)
            ),
            url("${BANNER_BASE}${movie.backdrop_path}")`
          : "none",
      }}
    >
      <div className={styles.contents}>
        {/* image Netflix */}
        <img
          className={styles.logoImg}
          src={Netflixlogo}
          alt="banerlogo image"
        />
        {/* heading part */}
        <h1 className={styles.title}>
          {" "}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* parahraph text */}
        <p className={styles.description}>
          {movie?.overview?.length > 180
            ? movie.overview.slice(0, 180) + "..."
            : movie?.overview}
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
