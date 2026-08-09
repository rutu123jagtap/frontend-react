import { Stack, Button } from "@mui/material";
export default function RemoveDuplicatesOfSortedArray() {
  let array = [9, 9, 12, 23, 23, 45, 67, 89, 98, 98];
  const removeDuplicates = () => {
    let i = 0;
    let array2 = [];
    for (let j = 1; j < array?.length; j++) {
      if (array[i] !== array[j]) {
        array2.push(array[i]);
        array[i + 1] = array[j];
        i++;
      }
    }
    console.log(array2);
  };
  return (
    <Stack>
      <Button onClick={removeDuplicates}>CLICK HERE!!!</Button>
    </Stack>
  );
}
