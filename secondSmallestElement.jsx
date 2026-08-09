import { Stack, Button } from "@mui/material";
import { initCustomFormatter } from "vue";

export default function SecondSmallestElement() {
  const SecondSmallest = () => {
    const a = [90, 34, 56, 8, 0, -2, -1, 5, 4, 9];
    let smallest = a[0];
    let SecondSmallest = Infinity;

    for (let i = 0; i < a?.length; i++) {
      if (smallest > a[i]) {
        SecondSmallest = smallest;
        smallest = a[i];
      } else if (SecondSmallest > a[i] && a[i] !== smallest) {
        SecondSmallest = a[i];
      }
    }

    console.log("Second Smallest Element in Array", SecondSmallest);
  };
  return (
    <Stack>
      <Button onClick={SecondSmallest}>Click here!!</Button>
    </Stack>
  );
}
