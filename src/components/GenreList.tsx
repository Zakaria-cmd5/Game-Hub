import React from "react";
import useGenre from "../hooks/useGenre";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, error, isLoading } = useGenre("/genres");

  return (
    <ul>
      {genres.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </ul>
  );
};

export default GenreList;
