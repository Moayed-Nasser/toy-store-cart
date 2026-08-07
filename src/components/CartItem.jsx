import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
  Rating,
  IconButton,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function CartItem({ name, price, image, onAddToCart }) {
  return (
    <Card
      sx={{
        width: 300,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: 4,
        transition: "all .3s ease",
        cursor: "pointer",
        position: "relative",

        "&:hover": {
          transform: "translateY(-10px) scale(1.03)",
          boxShadow: "0 18px 35px rgba(0,0,0,.25)",
        },

        "&:hover .product-image": {
          transform: "scale(1.08)",
        },

        "&:hover .best-chip": {
          transform: "rotate(-5deg)",
        },
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "white",

          "&:hover": {
            backgroundColor: "#ffe6e6",
          },
        }}
      >
        <FavoriteBorderIcon color="error" />
      </IconButton>

      <CardMedia
        component="img"
        image={image}
        alt={name}
        className="product-image"
        sx={{
          height: 180,
          objectFit: "contain",
          backgroundColor: "#fafafa",
          p: 2,
          transition: "0.3s",
        }}
      />

      <CardContent>
        <Chip
          label="Best Seller"
          color="warning"
          size="small"
          className="best-chip"
          sx={{
            mb: 2,
            transition: "0.3s",
          }}
        />

        <Typography
          variant="h6"
          align="center"
          fontWeight="bold"
          sx={{
            minHeight: 55,
          }}
        >
          {name}
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          sx={{ mb: 1 }}
        >
          <Rating
            value={5}
            readOnly
            size="small"
          />
        </Box>

        <Typography
          variant="h5"
          align="center"
          color="success.main"
          fontWeight="bold"
          sx={{
            mt: 1,
            mb: 3,
          }}
        >
          ${price}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={onAddToCart}
          sx={{
            borderRadius: 3,
            py: 1.2,
            transition: ".3s",

            "&:hover": {
              transform: "scale(1.05)",
              backgroundColor: "#1565c0",
            },
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default CartItem;