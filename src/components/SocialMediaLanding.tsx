import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";
import Image from "next/image";
import contactimg from "../assets/contactimg2.jpg";

const SocialMediaLanding = () => {
  return (
    <Box style={{ position: "relative", marginTop: "5rem" }}>
      <Image
        src={contactimg}
        style={{ width: "100%", height: "20rem", objectFit: "cover" }}
        alt="contactimg"
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        <h4
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "1rem",
            letterSpacing: "4px",
          }}>
          FIND US ON SOCIAL
        </h4>
        <h2
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "8px",
            fontSize: "4.5rem",
            opacity: "0.7",
            textAlign: "center",
            marginTop: "30px",
          }}>
          @cafelavie
        </h2>
        <div
          style={{
            textAlign: "center",
            marginTop: "-30px",
          }}>
          <InstagramIcon
            sx={{ fontSize: "30px", color: "white", margin: "0px 10px" }}
          />
          <TwitterIcon
            sx={{ fontSize: "30px", color: "white", margin: "0px 10px" }}
          />
          <FacebookIcon
            sx={{ fontSize: "30px", color: "white", margin: "0px 10px" }}
          />
        </div>
      </div>
    </Box>
  );
};

export default SocialMediaLanding;
