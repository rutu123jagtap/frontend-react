import { Stack, Box, Button } from "@mui/material";
export default function SecondLargestElemnt() {
  const Array = [90, 90, 80];
  console.log(Array);
  const SecondLargest = () => {
    let largest = Array[0];
    let SecondLargest = -1;
    for (let i = 0; i < Array?.length; i++) {
      if (largest < Array[i]) {
        SecondLargest = largest;
        largest = Array[i];
      }
      if (largest > Array[i] && SecondLargest < Array[i]) {
        SecondLargest = Array[i];
      }
    }
    console.log("Second Largest Element in array is => ", SecondLargest);
  };
  return (
    <Stack onClick={SecondLargest}>
      <Button>Click here</Button>
    </Stack>
  );
}
