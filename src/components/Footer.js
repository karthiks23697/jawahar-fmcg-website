import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 'auto' }}>
      <Container>
        <Typography variant="body1" align="center">
          © 2024 Arumanam's Store. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 