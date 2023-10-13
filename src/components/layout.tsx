import { useAppDispatch } from "@/store/hooks";
import { fetchAppData } from "@/store/slices/appSlice";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useEffect } from "react";
import logo from "../assets/logo.png";

const sidebarMenuItems = [
  {
    id: 1,
    label: "Orders",
    route: "/backoffice/orders",
  },
  {
    id: 2,
    label: "Menus",
    route: "/backoffice/menus",
  },
  {
    id: 3,
    label: "Menu Categories",
    route: "/backoffice/menuCategories",
  },
  {
    id: 4,
    label: "Tables",
    route: "/backoffice/tables",
  },
  {
    id: 5,
    label: "Locations",
    route: "/backoffice/locations",
  },
  {
    id: 6,
    label: "Settings",
    route: "/backoffice/settings",
  },
];

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { data } = useSession();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAppData({ locationId: undefined }));
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuAnchorEl(null);
  };
  return (
    <Box>
      <AppBar position="static" sx={{ background: "#9E9FA5" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Image
                  alt="logo"
                  src={logo}
                  style={{ width: "80px", height: "80px", marginRight: "16px" }}
                />
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                }}>
                <List sx={{ p: 0, display: "flex" }}>
                  {sidebarMenuItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.route}
                      passHref
                      style={{ textDecoration: "none" }}>
                      <ListItem
                        disablePadding
                        sx={{
                          "&:hover": {
                            backgroundColor: "black",
                            borderRadius: "10px",
                          },
                        }}>
                        <ListItemButton>
                          <ListItemText
                            primary={item.label}
                            sx={{
                              color: "#E8F6EF",
                              textDecoration: "none",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}>
                {data && (
                  <Button
                    color="inherit"
                    sx={{
                      background: "#040303",
                      marginRight: "10px",
                      borderRadius: "10px",
                      p: "10px",
                      "&:hover": {
                        backgroundColor: "#161616",
                      },
                    }}
                    onClick={() => signOut({ callbackUrl: "/auth/signin" })}>
                    Sign out
                  </Button>
                )}
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenMobileMenu}
                  color="inherit"
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
            <Menu
              id="menu-appbar"
              anchorEl={mobileMenuAnchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(mobileMenuAnchorEl)}
              onClose={handleCloseMobileMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              <List sx={{ p: 0 }}>
                {sidebarMenuItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.route}
                    passHref
                    style={{
                      textDecoration: "none",
                    }}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText
                          className="app-bar-link"
                          sx={{
                            color: "black",
                            textDecoration: "none",
                          }}
                          primary={item.label}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      {children}
    </Box>
  );
};

export default Layout;
