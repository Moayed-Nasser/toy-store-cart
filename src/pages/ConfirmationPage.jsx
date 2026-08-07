import {
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function ConfirmationPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <CheckCircleIcon
            color="success"
            sx={{
              fontSize: 90,
              mb: 2,
            }}
          />

          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
          >
            Order Confirmed!
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Thank you for shopping with Toy Store.
            <br />
            Your order has been placed successfully.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: 3,
              px: 4,
            }}
            onClick={() => navigate("/")}
          >
            Back to Store
          </Button>
        </Paper>
      </Container>
    </>
  );
}

export default ConfirmationPage;