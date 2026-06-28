import { Stack, Box, Button, Chip } from "@mui/material";
import { useState } from "react";
export default function ArrayOperations() {
  const [large, setLarge] = useState(null);
  const array = [3, 2, 1, 5, 7, 8, 3, 11, 66, 55, 88, 6];
  const getLargest = () => {
    let largest = array[0];
    for (let i = 0; i < array?.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
    setLarge(largest);
  };

  return (
    <Stack>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {array.map((item, index) => (
          <Chip key={index} label={item} />
        ))}
      </Stack>
      <Stack>
        <Button onClick={getLargest}>GET LARGEST ELEMENT</Button>
        <Stack mt={2}>
          {large !== null && (
            <Chip
              label={`Largest Element: ${large}`}
              color="primary"
              variant="filled"
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
