import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "brown", height: "75px" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ margin: "0 auto" }}>
              Cafe La Vie
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Button
          variant="contained"
          sx={{ width: "fit-content", mt: 10 }}
          onClick={() => signIn("google", { callbackUrl: "/backoffice" })}>
          Sign in with google
        </Button>
      </Box>
    </>
  );
};

export default SignIn;
