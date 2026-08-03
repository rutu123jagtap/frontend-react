import { Stack, Button, Typography, Paper } from "@mui/material";

export default function LeftRotateArrayOnePosition() {
  const arr = [3, 4, 5, 6, 7, 8, 9];
  const n = arr.length;

  const handleClick = () => {
    let temp = arr[0];

    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }

    arr[n - 1] = temp;
    console.log(arr);
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          width: 350,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Left Rotate Array
        </Typography>

        <Typography
          sx={{
            bgcolor: "#e3f2fd",
            p: 2,
            borderRadius: 2,
            fontSize: "20px",
            fontWeight: 600,
            letterSpacing: 1,
            mb: 3,
          }}
        >
          {arr.join(" , ")}
        </Typography>

        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            borderRadius: 2,
            px: 4,
            py: 1,
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Left Rotate One
        </Button>
      </Paper>
    </Stack>
  );
}