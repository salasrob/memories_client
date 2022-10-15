import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Copyright = () => {
  return (
    <Typography variant="body2" color="inherit">
      {"Copyright © Rob Salas & Monica Sandoval"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        textAlign: "center",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Grid container alignContent="center">
        <Grid item sm={12}>
          <Typography variant="body1">Memories App</Typography>
          <Copyright />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Footer;