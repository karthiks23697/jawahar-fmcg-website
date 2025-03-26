import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid } from '@mui/material';

function ProductDetail() {
  const { id } = useParams();

  // This is a mock product - in a real app, you would fetch this from an API
  const product = {
    id: id,
    name: "Arumanam’s One Day Sambar Masala – The Nostalgic Taste",
    description: "Sambar is something we may eat often, but occasionally, you come across that one unforgettable sambar—the kind that rekindles nostalgia. Maybe it’s your mother’s sambar, packed with love and memories, or the one from that famous restaurant you relished. Or perhaps it’s the rich, aromatic kalyana sambar that made you attend wedding events just for the food. It’s all about the taste—that perfect balance of flavours—something you wish you could recreate at home. But, something is always missing!",
    price: 9.99,
    image: "https://example.com/shampoo.jpg"
  };

  return (
    <Container>
      <Grid container spacing={4} sx={{ my: 4 }}>
        <Grid item xs={12} md={6}>
          <Box component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1">
            {product.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail; 