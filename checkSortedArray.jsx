import { Stack, Button } from "@mui/material";
export default function CheckSortedArray() {
  const checkSorted = () => {
    let a = [-1, 2, 4, 5, 7];
    let sorted = true;
    for (let i = 0; i < a?.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        sorted = false;
        break;
      }
    }

    console.log("Array is sorted or not, Answer is = ", sorted);
  };
  return (
    <Stack onClick={checkSorted}>
      <Button>Click here!</Button>
    </Stack>
  );
}
