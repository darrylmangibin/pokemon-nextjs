import { useInfiniteQuery } from "react-query";
import axios from "axios";

export const useFetchPokemonQuery = () => {
  return useInfiniteQuery(
    ["pokemon"],
    async ({ pageParam = 0 }) => {
      const res = await axios.get<any>(
        `/api/pokemon?limit=20&offset=${pageParam}`,
      );

      return { ...res.data, prevOffset: pageParam };
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.prevOffset + 20 > lastPage.count) {
          return false;
        }

        return lastPage.prevOffset + 20;
      },
      refetchOnWindowFocus: false
    },
  );
};
