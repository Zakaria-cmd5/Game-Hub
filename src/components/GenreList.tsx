import { Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();

  return (
    <ul>
      {data.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </ul>
  );
};

export default GenreList;
