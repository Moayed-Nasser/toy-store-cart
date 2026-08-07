import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function ShippingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Paper
          elevation={5}
          sx={{
            p: 4,
            borderRadius: 4,
          }}
        >
          <LocalShippingIcon
            color="primary"
            sx={{
              fontSize: 70,
              display: "block",
              mx: "auto",
              mb: 2,
            }}
          />

          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Shipping Information
          </Typography>

          <Typography
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Please enter your shipping details.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Full Name"
              fullWidth
            />

            <TextField
              label="Phone Number"
              fullWidth
            />

            <TextField
              label="Address"
              fullWidth
            />

            <TextField
              label="City"
              fullWidth
            />

            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: 3,
              }}
              onClick={() => navigate("/payment")}
            >
              Continue to Payment
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default ShippingPage;