import React, { useMemo, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { styles } from "../../portfolioComponents/mainSection/mainStyle";
import emailjs from "@emailjs/browser";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactUsForm = () => {
  const theme = useTheme();
  const sx = useMemo(() => styles(theme), [theme]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      alert("Email sent successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.background.paper }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          py: 3,
          mt: 4,
          textAlign: "center",
        }}
      >
        Get in Touch
      </Typography>
      <Container sx={{ ...sx.footerSection }}>
        <Box sx={{ mx: 4 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, textAlign: "center" }}
          >
            Open to new opportunities, collaborations, and interesting projects.
            Feel free to connect!
          </Typography>
          <Box
            sx={{ display: { xs: "block", md: "flex" }, gap: 2, marginTop: 2 }}
          >
            <Button
              variant="contained"
              href="mailto:harrusingh81@gmail.com"
              sx={{
                backgroundColor: "#FF8C00", // Orange color for Email
                color: "white",
                textTransform: "none",
                borderRadius: "999px",
                padding: "8px 16px",
                "&:hover": {
                  backgroundColor: "#FF7F00",
                },
                width: { xs: "100%" },
              }}
              startIcon={<EmailIcon />}
            >
              Email
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0077B5", // LinkedIn blue
                color: "white",
                textTransform: "none",
                borderRadius: "999px",
                padding: "8px 16px",
                "&:hover": {
                  backgroundColor: "#005582",
                },
                width: { xs: "100%" },
                mt: { xs: 2, md: 0 },
              }}
              href="https://www.linkedin.com/in/harsh-singh10352/"
              startIcon={<LinkedInIcon />}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              href="https://github.com/Harry-CodeCraft"
              sx={{
                backgroundColor: "#333", // GitHub dark gray
                color: "white",
                textTransform: "none",
                borderRadius: "999px",
                padding: "8px 16px",
                "&:hover": {
                  backgroundColor: "#222",
                },
                width: { xs: "100%" },
                mt: { xs: 2, md: 0 },
              }}
              startIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              href="https://instagram.com/harrycodecraft"
              sx={{
                backgroundColor: "#E4405F", // Instagram pink
                color: "white",
                textTransform: "none",
                borderRadius: "999px",
                padding: "8px 16px",
                "&:hover": {
                  backgroundColor: "#C13584",
                },
                width: { xs: "100%" },
                mt: { xs: 2, md: 0 },
              }}
              startIcon={<InstagramIcon />}
            >
              Instagram
            </Button>
          </Box>
        </Box>
        <Box component="form" onSubmit={handleSubmit} sx={sx.contactUsForm}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Contact Us
          </Typography>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={sx.fieldSetting}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={sx.fieldSetting}
          />
          <TextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={sx.fieldSetting}
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={sx.fieldSetting}
            multiline
            rows={4}
          />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            sx={{ ...sx.resumeButton, marginTop: 2 }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Submit"
            )}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsForm;
