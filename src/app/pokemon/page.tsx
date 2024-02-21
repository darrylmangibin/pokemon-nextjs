"use client";

import Loader from "@/components/Loader";
import PokemonList from "@/components/PokemonList";
import { useFetchPokemonQuery } from "@/resources/pokemon/pokemon.query";
import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const PokemonPage: FC = () => {
  const { data, hasNextPage, fetchNextPage, isLoading } =
    useFetchPokemonQuery();

  const pokemons = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.results];
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Grid container spacing={2} position="relative">
      <Grid item xs={12}>
        <Typography align="center" gutterBottom variant="h3">
          Pokemon Species
        </Typography>
      </Grid>
      <InfiniteScroll
        dataLength={pokemons?.length || 0}
        next={() => fetchNextPage()}
        hasMore={Boolean(hasNextPage)}
        loader={
          <Box position="relative" overflow="hidden" height="500px">
            <Loader />
          </Box>
        }
      >
        <PokemonList data={pokemons || []} />
      </InfiniteScroll>
    </Grid>
  );
};

export default PokemonPage;
