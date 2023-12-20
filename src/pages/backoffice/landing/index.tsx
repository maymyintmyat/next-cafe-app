import LandingMenus from "@/components/LandingMenus";
import LandingServices from "@/components/LandingServices";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Card,
  CardMedia,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../assets/logo.png";

const pages = ["Home", "Story", "Menu", "Service", "Blog", "Contact"];

const ResponsiveLandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const heading = "Coffee is a language in itself";

  const content = `"Coffee is a universal language that connects people over conversations, creating unforgettable moments."`;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <Box>
        <div
          style={{
            marginTop: isMobile ? "0" : "-100px",
            alignItems: isMobile ? "center" : "flex-start",
          }}
          className="welcome-img">
          <AppBar
            position="static"
            sx={{
              background: "transparent",
              boxShadow: "none",
              padding: "10px",
            }}
            className="fixed-navbar">
            <Container maxWidth="xl">
              <Toolbar
                disableGutters
                style={{ display: "flex", justifyContent: "space-between" }}>
                <Image
                  src={logo}
                  width={85}
                  height={85}
                  alt="Picture of logo"
                />
                {isMobile ? (
                  <Box
                    sx={{ display: "block", color: "black" }}
                    onClick={handleOpenNavMenu}>
                    <IconButton size="large" aria-label="menu" color="inherit">
                      <MenuIcon />
                    </IconButton>
                  </Box>
                ) : (
                  <Box
                    className="nav-menu"
                    sx={{
                      display: { xs: "none", md: "block" },
                    }}>
                    {pages.map((page, index) => (
                      <a
                        key={page}
                        href={`#page${index}`}
                        style={{
                          marginLeft: index > 0 ? "2rem" : "0",
                          color: "black",
                          fontFamily: "Outfit",
                          fontSize: "1.2rem",
                          fontWeight: "600",
                          textDecoration: "none",
                          position: "relative",
                          transition:
                            "color 0.3s ease, text-decoration 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = "#3f2305";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = "black";
                        }}>
                        {page}
                      </a>
                    ))}
                  </Box>
                )}
              </Toolbar>
            </Container>
          </AppBar>
        </div>
        <div className="welcome-part">
          <h1 style={{ color: "black", marginTop: isMobile ? "40px" : "0" }}>
            {heading}
          </h1>
          <p
            style={{
              color: "black",
              fontSize: isMobile ? "1rem" : "2rem",
              lineHeight: isMobile ? "1.1rem" : "3rem",
            }}>
            {isMobile ? (
              <>
                {content.slice(0, 50)}
                <span style={{ display: isExpanded ? "none" : "inline" }}>
                  ...{" "}
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={toggleExpand}>
                    Read more
                  </span>
                </span>
                <span style={{ display: isExpanded ? "inline" : "none" }}>
                  {content.slice(50)}
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={toggleExpand}>
                    {" "}
                    Read less
                  </span>
                </span>
              </>
            ) : (
              <>
                Coffee is a universal language that connects people <br />
                over conversations, creating unforgettable <br /> moments.
              </>
            )}
          </p>
        </div>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}>
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: isMobile ? "column" : "row", // Change direction for mobile
        }}>
        <Box
          sx={{
            order: isMobile ? 2 : 1, // Change the order for mobile
            margin: isMobile ? "0 auto 2rem" : "2rem 1rem 0 0", // Add margin for card
            marginTop: isMobile ? 0 : "10rem",
          }}>
          <Card
            sx={{
              maxWidth: isMobile ? 300 : 500, // Reduce image width for mobile
            }}>
            <CardMedia
              component="img"
              alt="menuQr"
              height={isMobile ? 250 : 400} // Reduce image height for mobile
              width={isMobile ? 250 : 400} // Reduce image width for mobile
              image="https://i.pinimg.com/564x/76/67/fb/7667fb12404cbf0700f371b4fc3206eb.jpg"
            />
          </Card>
        </Box>
        <Box
          sx={{
            order: isMobile ? 1 : 2, // Change the order for mobile
            marginTop: isMobile ? "1rem" : "14rem", // Add margin top for the paragraph
            marginLeft: isMobile ? "2rem" : "10rem", // Add margin left for card in mobile
            marginBottom: isMobile ? "2rem" : 0, // Add margin bottom for mobile
            marginRight: isMobile ? "1rem" : 0,
          }}>
          <h1 style={{ cursor: "pointer" }}>Our Story</h1>
          <p
            style={{
              cursor: "pointer",
              lineHeight: isMobile ? "1.5rem" : "2rem",
              fontSize: isMobile ? "1rem" : "1.3rem",
            }}>
            <span style={{ color: "black", fontWeight: "600" }}>
              Cafe La Vie{""}
            </span>{" "}
            is a tale of passion for great coffee <br />
            {""}and the sweet moments in life.
            <br />
            {""} Founded with a vision to blend innovation and <br />
            {""}tradition, we have redefined your cafe experience <br />
            {""}with QR code convenience.
            <br />
            {""}Join us for a taste of life`s finer flavors today.
            <span />
            {""}
          </p>
        </Box>
      </Box>

      <Box>
        <LandingMenus />
      </Box>
      <Box>
        <LandingServices />
      </Box>
      <Box>Our Blogs</Box>
      <Box>Contact Us</Box>
    </Box>
  );
};

export default ResponsiveLandingPage;
