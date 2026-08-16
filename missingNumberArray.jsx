import { Stack, Typography, Button, Paper } from "@mui/material";
import { useState } from "react";

export default function MissingNumberArray() {
  let arr = [3, 5, 7, 8, 6, 9, 10];
  arr.sort((a, b) => a - b);

  let n = arr?.length;
  const [missNum, setMissNum] = useState();

  const handleMissingNumber = () => {
    for (let i = arr[0]; i < n - 1; i++) {
      let flag = 0;

      for (let j = 0; j < n; j++) {
        if (arr[j] == i) {
          flag = 1;
        }
      }
      if (flag === 0) {
        setMissNum(i);
      }
    }
  };

  return (
    <Stack
      spacing={3}
      sx={{
        width: "400px",
        margin: "50px auto",
        padding: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h5" fontWeight="bold">
            Missing Number
          </Typography>

          <Typography variant="body1">
            Main array: <strong>{arr.join(", ")}</strong>
          </Typography>

          <Button
            variant="contained"
            onClick={handleMissingNumber}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Find Missing Number
          </Button>

          <Typography
            variant="h6"
            sx={{
              padding: 1.5,
              borderRadius: 1,
              backgroundColor: "#f5f5f5",
            }}
          >
            Missing number is: <strong>{missNum}</strong>
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
}
