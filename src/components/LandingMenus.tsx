import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const LandingMenus = () => {
  return (
    <Box sx={{ mt: "8rem" }}>
      <h1 style={{ textAlign: "center" }}>Recommended For you</h1>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          mt: "8rem",
          gap: "20px",
        }}>
        {" "}
        <Card sx={{ width: 200, height: 250 }}>
          <CardMedia
            sx={{ height: 200, backgroundSize: "cover", width: "100%" }}
            image={
              "https://i.pinimg.com/564x/11/5e/c2/115ec2ca97ef86f47ea6c619ec2c9e37.jpg"
            }
            component={"div"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ textAlign: "center", mb: 0 }}>
              Espresso
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 200, height: 250 }}>
          <CardMedia
            sx={{ height: 200, backgroundSize: "cover", width: "100%" }}
            image={
              "https://i.pinimg.com/564x/8b/ce/e1/8bcee16eeefb628704631716e9b267fe.jpg"
            }
            component={"div"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ textAlign: "center", mb: 0 }}>
              Latte
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 200, height: 250 }}>
          <CardMedia
            sx={{ height: 200, backgroundSize: "cover", width: "100%" }}
            image={
              "https://i.pinimg.com/564x/6f/a1/4d/6fa14df0a7a536a1f4cb4fdd9d92c835.jpg"
            }
            component={"div"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ textAlign: "center", mb: 0 }}>
              Iced Coffee
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 200, height: 250 }}>
          <CardMedia
            sx={{ height: 200, backgroundSize: "cover", width: "100%" }}
            image={
              "https://i.pinimg.com/564x/40/3b/99/403b997094a3d5d40413896a33268036.jpg"
            }
            component={"div"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ textAlign: "center", mb: 0 }}>
              Croissant
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 200, height: 250 }}>
          <CardMedia
            sx={{ height: 200, backgroundSize: "cover", width: "100%" }}
            image={
              "https://i.pinimg.com/564x/39/fd/9c/39fd9c8065272572ac55885d595d589e.jpg"
            }
            component={"div"}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ textAlign: "center", mb: 0 }}>
              Tiramisu
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default LandingMenus;
