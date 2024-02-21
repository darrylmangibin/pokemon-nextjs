import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems=" center"
      flexDirection="column"
      minHeight="550px"
    >
      <Typography variant="h4" gutterBottom>
        Pokémon
      </Typography>
      <Typography>
        Pokémon[a] is a Japanese media franchise consisting of video games,
        animated series and films, a trading card game, and other related media.
        The franchise takes place in a shared universe in which humans co-exist
        with creatures known as Pokémon, a large variety of species endowed with
        special powers. The franchise's target audience is children aged 5 to
        12,[1] but it is known to attract people of all ages.[2][3][4][5] The
        franchise originated as a pair of role-playing games developed by Game
        Freak, from an original concept by its founder, Satoshi Tajiri. Released
        on the Game Boy on February 27, 1996, the games became sleeper hits and
        were followed by manga series, a trading card game, and anime series and
        films. From 1998 to 2000, Pokémon was exported to the rest of the world,
        creating an unprecedented global phenomenon dubbed "Pokémania". By 2002,
        the craze had ended, after which Pokémon became a fixture in popular
        culture, with new products being released to this day. In the summer of
        2016, the franchise spawned a second craze with the release of Pokémon
        Go, an augmented reality game developed by Niantic. Pokémon has since
        been estimated to be the world's highest-grossing media franchise and
        one of the best-selling video game franchises. Pokémon has an uncommon
        ownership structure. Unlike most IPs, which are owned by one company,
        Pokémon is jointly owned by three: Nintendo, Game Freak, and
        Creatures.[6][7] Game Freak develops the core series role-playing games,
        which are published by Nintendo exclusively for their consoles, while
        Creatures manages the trading card game and related merchandise,
        occasionally developing spin-off titles. The three companies established
        The Pokémon Company (TPC) in 1998 to manage the Pokémon property within
        Asia. The Pokémon anime series and films are co-owned by Shogakukan.
        Since 2009, The Pokémon Company International (TPCi) subsidiary of TPC
        has managed the franchise in all regions outside of Asia.[8]
      </Typography>
    </Box>
  );
}
