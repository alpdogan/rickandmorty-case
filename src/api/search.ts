import axios from "axios";
import { Character } from "../models/Character";

export const searchCharacter = async (
  inputValue: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void
) => {
  try {
    setLoading(true);
    setError(null);
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${inputValue}`
    );
    const data = response.data.results.map((character: Character) => {
      return {
        id: character.id,
        value: character.id,
        name: character.name,
        episode: character.episode || [],
        image: character.image,
      };
    });
    return data;
  } catch (error: any) {
    console.error("Error", error);
    setError("Failed to fetch characters. Please try again.");
    return [];
  } finally {
    setLoading(false);
  }
};
