import { Button, TextField, Stack, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
export default function ContactUsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState();

  const apiCall = async (payload) => {
    const results = await axios?.post(
      "https://questions.greatfrontend.com/api/questions/contact-form",
      payload,
    );
    setData(results?.data);
    setIsVisible(true);
  };

  const handleSubmitClick = async () => {
    const payload = { name, email, message };
    await apiCall(payload);
  };
  return (
    <Stack
      spacing={2}
      sx={{
        py: 20,
        px: 45,
      }}
    >
      <h5>Contact Us Form</h5>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Message"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Stack justifyContent="flex-end" direction="row">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6d6456",
            color: "white",
            width: 200,
            "&:hover": {
              backgroundColor: "#968a77",
            },
          }}
          onClick={handleSubmitClick}
        >
          Submit
        </Button>
      </Stack>

      {isVisible && <Alert severity="success">{data}</Alert>}
    </Stack>
  );
}
