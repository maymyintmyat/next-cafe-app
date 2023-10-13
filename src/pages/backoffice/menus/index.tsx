import MenuCard from "@/components/MenuCard";
import Layout from "@/components/layout";
import { useAppSelector } from "@/store/hooks";
import { appData } from "@/store/slices/appSlice";
import { getSelectedLocationId } from "@/utils/client";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import NewMenu from "./NewMenu";

const Menus = () => {
  const [open, setOpen] = useState(false);
  const { isLoading, menusMenuCategoriesLocations, menus } =
    useAppSelector(appData);
  const selectedLocationId = getSelectedLocationId() as string;
  console.log(selectedLocationId);

  const validMenusIds = menusMenuCategoriesLocations
    .filter(
      (item) => item.menuId && item.locationId === Number(selectedLocationId)
    )
    .map((item) => item.menuId);

  const filteredMenus = menus.filter(
    (menu) => menu.id && validMenusIds.includes(menu.id)
  );
  console.log(isLoading);

  // if (isLoading) return <Loading />;

  return (
    <Layout>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            m: "0 auto",
          }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}>
            <Button
              onClick={() => setOpen(true)}
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: "#4C4C6D",
                width: "fit-content",
                color: "#E8F6EF",
                mb: 2,
                ":hover": {
                  bgcolor: "#1B9C85",
                  color: "white",
                },
              }}>
              New menu
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {filteredMenus.map((item) => (
              <MenuCard
                key={item.id}
                menu={item}
                href={`/backoffice/menus/${item.id}`}
              />
            ))}
          </Box>
        </Box>
        <NewMenu open={open} setOpen={setOpen} />
      </Box>
    </Layout>
  );
};

export default Menus;
