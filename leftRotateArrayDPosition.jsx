import { Stack, Button, Paper, Typography } from "@mui/material";

export default function LeftRotateArrayDPosition() {
  let arr = [2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11];
  const n = arr.length;
  const RotateD = 37;

  const handleClick = () => {
    let d = RotateD % n;

    let childArray = [];

    for (let i = 0; i < d; i++) {
      childArray[i] = arr[i];
    }

    for (let i = d; i < n; i++) {
      arr[i - d] = arr[i];
    }

    for (let i = 0; i < d; i++) {
      arr[n - d + i] = childArray[i];
    }

    console.log(arr);
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        bgcolor: "#f4f6f8",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: 450,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Left Rotate Array (D Positions)
        </Typography>

        <Stack
          sx={{
            bgcolor: "#e3f2fd",
            border: "1px solid #90caf9",
            borderRadius: 2,
            p: 2,
            mb: 3,
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          {arr.join(" , ")}
        </Stack>

        <Button
          variant="contained"
          size="large"
          onClick={handleClick}
          sx={{
            borderRadius: 2,
            px: 4,
            py: 1,
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Rotate D Position
        </Button>
      </Paper>
    </Stack>
  );
}
