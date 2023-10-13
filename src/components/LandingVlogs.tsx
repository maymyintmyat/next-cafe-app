import { Box, useMediaQuery, useTheme } from "@mui/material";
import { AiFillStar } from "react-icons/ai";

const LandingVlogs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ mt: "8rem" }}>
      <div style={{ margin: "30px 0px", textAlign: "center" }}>
        <h1>What People are Saying</h1>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "40px",
          padding: "40px",
          flexWrap: isMobile ? "wrap" : 0,
        }}>
        <Box sx={{ width: "100%", marginRight: "35px" }}>
          <div style={{ margin: "30px 0" }}>
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
          </div>
          <div>
            <h3 style={{ opacity: 0.75 }}>
              &quot;A Tranquil Haven for Coffee and Art Lovers&quot;
            </h3>
          </div>
          <div>
            <p style={{ lineHeight: "31px", opacity: "0.6" }}>
              Cafe la Vie is a hidden gem for those seeking a serene escape. The
              QR code ordering system made it a breeze to explore their diverse
              menu. The jazz music created a soothing atmosphere, and browsing
              famous paintings and books added to the charm. I sipped on a rich
              cappuccino and savored a decadent dessert – a perfect blend of art
              and taste.
            </p>
          </div>
          <div>
            <h6 style={{ opacity: 0.75 }}>Emily Anderson</h6>
          </div>
        </Box>
        <Box sx={{ width: "100%", marginRight: "35px" }}>
          <div style={{ margin: "30px 0" }}>
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
          </div>
          <div>
            <h3 style={{ opacity: 0.75 }}>&quot;Jazz, Java, and Joy&quot;</h3>
          </div>
          <div>
            <p style={{ lineHeight: "31px", opacity: "0.6" }}>
              Cafe la Vie is a delightful haven for those in search of a
              coffeehouse with character. The QR code ordering system simplified
              the menu selection process, and their offerings extended beyond
              just coffee to include delectable desserts and smoothies. The
              gentle jazz music in the background set the mood just right,
              making it an ideal place to unwind. The presence of famous
              paintings and books to peruse added an extra layer of charm. A
              joyous experience for all the senses!
            </p>
          </div>
          <div>
            <h6 style={{ opacity: 0.75 }}>David Thompson</h6>
          </div>
        </Box>
        <Box sx={{ width: "100%", marginRight: "35px" }}>
          <div style={{ margin: "30px 0" }}>
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
          </div>
          <div>
            <h3 style={{ opacity: 0.75 }}>
              &quot;Exquisite Coffee Experience&quot;
            </h3>
          </div>
          <div>
            <p style={{ lineHeight: "31px", opacity: "0.6" }}>
              Cafe la Vie offers an exquisite coffee experience that is second
              to none. I opted for a rich cappuccino through their QR code
              system, and the taste was impeccable. The cafe`s thoughtfully
              designed interior, complete with famous paintings and a wide
              selection of books, made it a perfect spot for coffee aficionados
              seeking both taste and culture.
            </p>
          </div>
          <div>
            <h6 style={{ opacity: 0.75 }}>Sophia Miller</h6>
          </div>
        </Box>
        <Box sx={{ width: "100%" }}>
          <div style={{ margin: "30px 0" }}>
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
            <AiFillStar fontSize={20} color="#C58940" />
          </div>
          <div>
            <h3 style={{ opacity: 0.75 }}>
              &quot;Unique and Memorable Experience&quot;
            </h3>
          </div>
          <div>
            <p style={{ lineHeight: "31px", opacity: "0.6" }}>
              Cafe la Vie offers a truly unique experience. Ordering via QR code
              was fun and efficient. The menu`s diversity was impressive; I had
              a delicious smoothie and savory snack. The gentle jazz tunes in
              the background, combined with the artistic decor, created a cozy
              atmosphere. I found myself lost in a book while sipping my coffee.
              It is a gem in the heart of the city!
            </p>
          </div>
          <div>
            <h6 style={{ opacity: 0.75 }}>Olivia Martinez</h6>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingVlogs;
