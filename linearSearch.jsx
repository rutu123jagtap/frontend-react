import { Stack, Paper, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function LinearSearch() {
  const [flag, setFlag] = useState(false);
  const [number, setNumber] = useState("");

  let arr = [2, 3, 5, 7, 89, 12, 34, 5, 678, 9];

  const handleSearch = () => {
    setFlag(false);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === Number(number)) {
        setFlag(true);
        return;
      }
    }
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: 450,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Linear Search
          </Typography>

          <Typography>
            <strong>Array:</strong> [{arr.join(", ")}]
          </Typography>

          <TextField
            label="Enter Number to Search"
            type="number"
            fullWidth
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <Button variant="contained" size="large" onClick={handleSearch}>
            Search
          </Button>

          {number !== "" && (
            <Typography
              textAlign="center"
              color={flag ? "success.main" : "error.main"}
              fontWeight="bold"
            >
              {flag
                ? `${number} is Present in the Array`
                : `${number} is Not Present in the Array`}
            </Typography>
          )}
        </Stack>
      </Paper>
    </Stack>
  );
}
