import { Stack, Button, Paper, Typography } from "@mui/material";

export default function ZerosAtEndArray() {
  let arr = [1, 0, 2, 3, 0, 4, 0, 5, 6, 0];
  const n = arr.length;

  const handleClick = () => {
    let j = 0;

    for (let i = 0; i < n; i++) {
      if (arr[i] !== 0) {
        // Swap arr[i] and arr[j]
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        j++;
      }
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
          Move Zeros To End
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
          Move Zeros
        </Button>
      </Paper>
    </Stack>
  );
}
