import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack, Box, IconButton, Collapse } from "@mui/material";
import { useState } from "react";

const accordionData = [
  {
    id: 1,
    text: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document.",
  },
  {
    id: 2,
    text: "JavaScript is a programming language used to create dynamic web content.",
  },
];

export default function AccordionCollapsible() {
  const [openCollapse, setOpenCollapse] = useState(1);

  const handleOpen = (id) => {
    setOpenCollapse((prev) => (prev === id ? null : id));
  };

  return (
    <Stack spacing={2} sx={{ p: 3, bgcolor: "#ffcccc" }}>
      {accordionData.map((item) => {
        const isOpen = openCollapse === item.id;

        return (
          <Box
            key={item.id}
            sx={{
              p: 2,
              bgcolor: "#fff",
              borderRadius: 2,
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box fontWeight={600}>Accordion {item.id}</Box>

              <IconButton onClick={() => handleOpen(item.id)}>
                <ExpandMoreIcon
                  sx={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
              </IconButton>
            </Stack>

            <Collapse in={isOpen}>
              <Box sx={{ mt: 2 }}>{item.text}</Box>
            </Collapse>
          </Box>
        );
      })}
    </Stack>
  );
}
