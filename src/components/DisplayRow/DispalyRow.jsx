import React, { useState, useEffect } from "react";
import styles from "../DisplayRow/DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
// import { movies } from "../../Data/Data";
import { movieInstance } from "../../Utility/Movieinstance";
import request from "../../Utility/requestUrl";

function DispalyRow() {
  const [movies, setmovies] = useState({
    trending: [],
    netflixOrginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });
  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    try {
      const [
        trendingRes,
        netflixRes,
        topRatedRes,
        actionRes,
        comedyRes,
        horrorRes,
        romanceRes,
        docRes,
      ] = await Promise.all([
        movieInstance.get(request.fetchTrending),
        movieInstance.get(request.fetchNetflixOriginals),
        movieInstance.get(request.fetchTopRatedMovies),
        movieInstance.get(request.fetchActionMovies),
        movieInstance.get(request.fetchComedyMovies),
        movieInstance.get(request.fetchHorrorMovies),
        movieInstance.get(request.fetchRomanceMovies),
        movieInstance.get(request.fetchDocumentaries),
      ]);
      setmovies({
        trending: trendingRes.data.results,
        netflixOrginals: netflixRes.data.results,
        topRated: topRatedRes.data.results,

        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        horror: horrorRes.data.results,
        romance: romanceRes.data.results,
        documentaries: docRes.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.displayWrapper}>
      <SlideShow title="Netflix treding" movie={movies.trending} />
      <SlideShow title="Popular On Netflix" movie={movies.netflixOrginals} />
      <SlideShow title="action" movie={movies.action} />
      <SlideShow title="Top Rated" movie={movies.topRated} />
    </div>
  );
}

export default DispalyRow;
