import ImageCard from "../ImageCard";
import { Button, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { Pokemon } from "@/resources/pokemon/pokemon.interface";
import Link from "next/link";

export interface PokemonListProps {
  data: Pokemon[];
}

const PokemonList: FC<PokemonListProps> = ({ data: pokemons }) => {
  return (
    <Grid container spacing={4}>
      {pokemons.map(({ name }: any, i: any) => {
        return (
          <Grid
            key={i}
            item
            lg={3}
            md={4}
            xs={12}
            display="flex"
            justifyContent="center"
          >
            <Button
              LinkComponent={Link}
              href={`/pokemon/${name}`}
              fullWidth
              disableRipple
              sx={{ ":hover": { backgroundColor: "transparent" } }}
            >
              <ImageCard key={i} title={name} />
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PokemonList;
