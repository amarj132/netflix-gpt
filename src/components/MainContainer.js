import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTItle from "./VideoTItle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview } = mainMovie;

  return (
    <div>
      <VideoTItle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
