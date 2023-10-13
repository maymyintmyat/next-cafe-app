import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: "2rem", flexWrap: "wrap" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mb: "2.5rem",
          flexWrap: "wrap",
        }}>
        <div>
          <h4>LOCATION</h4>{" "}
          <p>
            127 Halstead Ave <br />
            {""} Harrison, NY 10528, United States{" "}
          </p>
        </div>
        <div>
          <h4>CONTACT</h4>
          <p>
            212-492-0300
            <br />
            {""} cafelavie.com
          </p>
        </div>
        <div>
          <h4>HOURS</h4>
          <p>
            Mon-Sat: 6am-4pm <br />
            {""}Sunday: 7am-4pm
          </p>
        </div>
      </Box>

      <Box>
        <div style={{ padding: "1px", backgroundColor: "black" }}>
          <p style={{ textAlign: "center", color: "white" }}>
            © 2023 Cafe La Vie. All Rights Reserved.
          </p>
        </div>
      </Box>
    </Box>
  );
};

export default Footer;
