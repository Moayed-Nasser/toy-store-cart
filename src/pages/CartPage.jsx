import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  Divider,
} from "@mui/material";

import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import products from "../data/products";

function CartPage() {
  const navigate = useNavigate();

  const cartRef = useRef(null);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const scrollToCart = () => {
    cartRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar onCartClick={scrollToCart} />

      <Container maxWidth="lg">
        <Paper
          elevation={5}
          sx={{
            mt: 4,
            mb: 5,
            p: 5,
            borderRadius: 4,
            textAlign: "center",
            background: "linear-gradient(135deg,#42a5f5,#1976d2)",
            color: "white",
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            🧸 Welcome to Toy Store
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Find the best toys at the best prices!
          </Typography>
        </Paper>

        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ mb: 4 }}
        >
          Products
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id}>
              <CartItem
                name={product.name}
                price={product.price}
                image={product.image}
                onAddToCart={() => addToCart(product)}
              />
            </Grid>
          ))}
        </Grid>

        <Paper
          ref={cartRef}
          elevation={4}
          sx={{
            mt: 6,
            mb: 5,
            p: 3,
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Shopping Cart
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {cart.length === 0 ? (
            <Typography align="center" color="text.secondary">
              Your cart is empty.
            </Typography>
          ) : (
            <>
              {cart.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 1,
                  }}
                >
                  <Typography>
                    {item.name} × {item.quantity}
                  </Typography>

                  <Typography fontWeight="bold">
                    ${item.price * item.quantity}
                  </Typography>
                </Box>
              ))}

              <Divider sx={{ my: 2 }} />

              <Typography
                variant="h5"
                fontWeight="bold"
                align="right"
              >
                Total: ${totalPrice}
              </Typography>

              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  mt: 3,
                  py: 1.5,
                  borderRadius: 3,
                }}
                onClick={() => navigate("/shipping")}
              >
                Proceed to Checkout
              </Button>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
}

export default CartPage;