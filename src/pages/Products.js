import { useState } from 'react';
import { Container, Grid, Typography, TextField } from '@mui/material';
import ProductCard from '../components/ProductCard';

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const products = [
    {
      id: 1,
      name: "Premium Shampoo",
      description: "Nourishing hair care product",
      price: 9.99,
      image: "/src/images/sambar-powder.jpg"
    },
    
    // Add more products
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h3" sx={{ my: 4 }}>
        Our Products
      </Typography>
      <TextField
        fullWidth
        label="Search Products"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 4 }}
      />
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products; 