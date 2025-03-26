import { Container, Typography } from '@mui/material';

function About() {
  return (
    <Container>
      <Typography variant="h3" sx={{ my: 4 }}>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to FMCG Store, your one-stop shop for all your daily consumer goods needs.
      </Typography>
    </Container>
  );
}

export default About; 