import { Container } from "@mui/material";

import Cards from "../../reusableComponents/cards";

const ProjectsSection = () => {
  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      <Cards type="Clash Card" />
    </Container>
  );
};

export default ProjectsSection;
