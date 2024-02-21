"Use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import Link from "next/link";
import { Switch } from "@mui/material";
import { useThemeMode } from "@/hooks/theme.hook";

const pages = [
  {
    pageName: "Pokemon",
    href: "/pokemon",
  },
];
const Header = () => {
  const setMode = useThemeMode((state) => state.setMode);
  const mode = useThemeMode((state) => state.mode);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar component="nav" position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button LinkComponent={Link} href="/">
            <Image src="/images/logo.png" width={256} height={94} alt="logo" />
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ href, pageName }) => (
                <MenuItem key={pageName}>
                  <Link href={href}>
                    <Typography textAlign="center">{pageName}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ href, pageName }) => (
              <Button
                key={pageName}
                sx={{ my: 2, color: "white", display: "block" }}
                LinkComponent={Link}
                href={href}
              >
                {pageName}
              </Button>
            ))}
          </Box>
          <Switch
            onChange={(e) => setMode(e.target.checked ? "dark" : "light")}
            checked={mode === "dark" ? true : false}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
