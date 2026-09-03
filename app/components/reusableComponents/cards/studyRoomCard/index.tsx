import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useSiteContent } from "@/app/context/siteContentContext";

const StudyRoomCard = () => {
  const { studyRoomCard } = useSiteContent();

  return (
    <Card
      sx={{
        width: 300,
        minHeight: 300,
        border: "1px solid #172323",
        borderTop: "4px solid #e45b43",
        borderRadius: 0,
        bgcolor: "#f4f1ea",
        color: "#172323",
        boxShadow: "8px 8px 0 rgba(23, 35, 35, 0.12)",
      }}
    >
      <CardContent
        sx={{ display: "flex", minHeight: 250, flexDirection: "column", p: 3 }}
      >
        <Typography
          sx={{
            color: "#e45b43",
            fontFamily: "monospace",
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {studyRoomCard.eyebrow}
        </Typography>
        <Typography
          component="h2"
          sx={{
            mt: 5,
            maxWidth: 230,
            fontSize: 34,
            fontWeight: 500,
            letterSpacing: "-0.06em",
            lineHeight: 0.95,
          }}
        >
          {studyRoomCard.title}
        </Typography>
        <Box
          sx={{
            mt: "auto",
            borderTop: "1px solid rgba(23, 35, 35, 0.16)",
            pt: 2,
          }}
        >
          <Typography sx={{ color: "#687171", fontSize: 13, lineHeight: 1.5 }}>
            {studyRoomCard.description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          component="a"
          href={studyRoomCard.href}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            width: "100%",
            borderRadius: 0,
            bgcolor: "#172323",
            color: "#f4f1ea",
            fontSize: 13,
            fontWeight: 400,
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
            textTransform: "none",
            "&:hover": { bgcolor: "#e45b43" },
          }}
        >
          {studyRoomCard.buttonLabel} <span>-&gt;</span>
        </Button>
      </CardActions>
    </Card>
  );
};

export default StudyRoomCard;
