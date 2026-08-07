import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function PaymentPage() {
  const navigate = useNavigate();

  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    if (
      !cardHolder.trim() ||
      !cardNumber.trim() ||
      !expiryDate.trim() ||
      !cvv.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    navigate("/confirmation");
  };

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
          <CreditCardIcon
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
            Payment
          </Typography>

          <Typography
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Enter your payment information.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Card Holder"
              fullWidth
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
            />

            <TextField
              label="Card Number"
              fullWidth
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />

            <TextField
              label="Expiry Date"
              placeholder="MM/YY"
              fullWidth
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />

            <TextField
              label="CVV"
              type="password"
              fullWidth
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />

            <Button
              type="button"
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: 3,
              }}
              onClick={handlePayment}
            >
              Pay Now
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default PaymentPage;