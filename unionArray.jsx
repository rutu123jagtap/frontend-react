import { Stack, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";

export default function UnionArray() {
  let a1 = [2, 5, 6, 7, 8, 9];
  let a2 = [1, 3, 4, 5, 6, 7, 9];

  const [union, setUnion] = useState([]);

  const handleOnClick = () => {
    let a11 = [...a1].sort((a, b) => a - b);
    let a22 = [...a2].sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < a11.length; i++) {
      if (!result.includes(a11[i])) {
        result.push(a11[i]);
      }
    }

    for (let i = 0; i < a22.length; i++) {
      if (!result.includes(a22[i])) {
        result.push(a22[i]);
      }
    }

    setUnion(result);
  };

  return (
    <Stack
      spacing={3}
      alignItems="center"
      sx={{
        p: 4,
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Union of Two Arrays
      </Typography>

      <Paper sx={{ p: 2 }}>
        <Typography>Array 1: {a1.join(", ")}</Typography>

        <Typography>Array 2: {a2.join(", ")}</Typography>
      </Paper>

      <Button variant="contained" onClick={handleOnClick}>
        Find Union
      </Button>

      {union.length > 0 && (
        <Paper
          sx={{
            p: 2,
            minWidth: 300,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">Union</Typography>

          <Typography>{union.join(", ")}</Typography>
        </Paper>
      )}
    </Stack>
  );
}
