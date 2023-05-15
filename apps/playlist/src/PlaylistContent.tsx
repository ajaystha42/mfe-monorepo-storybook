import { Grid } from "@mantine/core";
import React from "react";
import { MovieCard } from "card";
import { useStore } from "store";

const Playlist = () => {
  const { movies } = useStore();
  return (
    <Grid
      sx={{
        gap: "1rem",
      }}
    >
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.title} showAddButton />
      ))}
    </Grid>
  );
};

export default Playlist;
