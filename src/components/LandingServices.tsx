import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { BiCoffeeTogo } from "react-icons/bi";
import { BsQrCodeScan } from "react-icons/bs";
import { FaKitchenSet } from "react-icons/fa6";
import { LuCroissant } from "react-icons/lu";
import { PiCoffeeFill } from "react-icons/pi";

const LandingServices = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ mt: "8rem" }}>
      <h1
        style={{
          marginTop: "4rem",
          marginBottom: "3rem",
          textAlign: "center",
        }}>
        Our Services
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "4rem",

          gap: isMobile ? "5%" : "3%",
        }}>
        <div
          style={{
            width: "100px",
            height: "auto",
            backgroundColor: "#9E9FA5",
            padding: "20px",
            borderTopRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            marginBottom: isMobile ? "15px" : 0,
          }}>
          <PiCoffeeFill fontSize={40} />
          <Typography variant="h6" sx={{ fontFamily: '"Outfit", sans-serif' }}>
            Coffee
          </Typography>
        </div>
        <div
          style={{
            width: "100px",
            height: "auto",
            backgroundColor: "#9E9FA5",
            padding: "20px",
            borderTopRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            marginBottom: isMobile ? "15px" : 0,
          }}>
          <BiCoffeeTogo fontSize={40} />
          <Typography variant="h6" sx={{ fontFamily: '"Outfit", sans-serif' }}>
            Take a way
          </Typography>
        </div>
        <div
          style={{
            width: "100px",
            height: "auto",
            backgroundColor: "#9E9FA5",
            padding: "20px",
            borderTopRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            marginBottom: isMobile ? "15px" : 0,
          }}>
          <LuCroissant fontSize={40} />
          <Typography variant="h6" sx={{ fontFamily: '"Outfit", sans-serif' }}>
            Pastry
          </Typography>
        </div>
        <div
          style={{
            width: "100px",
            height: "auto",
            backgroundColor: "#9E9FA5",
            padding: "20px",
            borderTopRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            marginBottom: isMobile ? "15px" : 0,
          }}>
          <BsQrCodeScan fontSize={40} />
          <Typography variant="h6" sx={{ fontFamily: '"Outfit", sans-serif' }}>
            Order
          </Typography>
        </div>
        <div
          style={{
            width: "100px",
            backgroundColor: "#9E9FA5",
            padding: "20px",
            borderTopRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            height: "auto",
          }}>
          <FaKitchenSet fontSize={40} />
          <Link href="/backoffice">
            <Button
              className="backoffice-btn"
              variant="text"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                color: "black",
                fontSize: "17px",
                textTransform: "capitalize",
              }}>
              Backoffice
            </Button>
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default LandingServices;
