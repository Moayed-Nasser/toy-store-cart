import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import ToysIcon from "@mui/icons-material/Toys";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar({ onCartClick }) {
  return (
    <AppBar
      position="sticky"
      elevation={6}
      sx={{
        background: "linear-gradient(90deg,#1976d2,#42a5f5)",
      }}
    >
      <Toolbar sx={{ py: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <ToysIcon sx={{ fontSize: 38, mr: 1 }} />

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            Toy Store
          </Typography>
        </Box>

        <Button
          color="inherit"
          startIcon={<ShoppingCartIcon />}
          onClick={onCartClick}
          sx={{
            fontWeight: "bold",
            border: "1px solid rgba(255,255,255,.5)",
            borderRadius: 2,
            px: 2,
          }}
        >
          CART
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;