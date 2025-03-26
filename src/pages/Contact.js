import { Container, Typography } from '@mui/material';

function Contact() {
  return (
    <Container>
      <Typography variant="h3" sx={{ my: 4 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        Get in touch with us for any queries or support.
      </Typography>
    </Container>
  );
}

export default Contact; 