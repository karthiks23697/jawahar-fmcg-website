import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import ProductCard from '../components/ProductCard';
import Carousel from 'react-material-ui-carousel';
// Import images
import sambarPowder from '../assets/images/sambar-powder.jpg';
import idlyPowder from '../assets/images/idly-powder.webp';

function Home() {
    const carouselItems = [
        {
          image: sambarPowder,
          title: "Sambar Masala",
          description: "Discover authentic flavors from our premium spice collection"
        },
        {
          image: sambarPowder,
          title: "Idly Powder",
          description: "Quality products for your daily care routine"
        },
        {
          image: sambarPowder,
          title: "Sambar Powder",
          description: "Great deals on your favorite products"
        }
      ];
  const featuredProducts = [
    {
      id: 1,
      name: "Arumanam's One Day Sambar Masala – The Nostalgic Taste",
      description: "Sambar is something we may eat often, but occasionally, you come across that one unforgettable sambar—the kind that rekindles nostalgia. Maybe it's your mother's sambar, packed with love and memories, or the one from that famous restaurant you relished. Or perhaps it's the rich, aromatic kalyana sambar that made you attend wedding events just for the food. It's all about the taste—that perfect balance of flavours—something you wish you could recreate at home. But, something is always missing!",
      price: 99,
      image: sambarPowder
    },
    {
        id: 2,
        name: "Arumanam's One Day Sambar Masala – The Nostalgic Taste",
        description: "Sambar is something we may eat often, but occasionally, you come across that one unforgettable sambar—the kind that rekindles nostalgia. Maybe it's your mother's sambar, packed with love and memories, or the one from that famous restaurant you relished. Or perhaps it's the rich, aromatic kalyana sambar that made you attend wedding events just for the food. It's all about the taste—that perfect balance of flavours—something you wish you could recreate at home. But, something is always missing!",
        price: 99,
        image: idlyPowder
      },
      {
        id: 3,
        name: "Arumanam's One Day Sambar Masala – The Nostalgic Taste",
        description: "Sambar is something we may eat often, but occasionally, you come across that one unforgettable sambar—the kind that rekindles nostalgia. Maybe it's your mother's sambar, packed with love and memories, or the one from that famous restaurant you relished. Or perhaps it's the rich, aromatic kalyana sambar that made you attend wedding events just for the food. It's all about the taste—that perfect balance of flavours—something you wish you could recreate at home. But, something is always missing!",
        price: 99,
        image: sambarPowder
      },
  ];

  return (
    <Container>
        {/* Hero Carousel Section */}
      <Box sx={{ my: 4 }}>
        <Carousel
          animation="slide"
          interval={4000}
          indicators={true}
          navButtonsAlwaysVisible={true}
          sx={{ minHeight: '400px' }}
        >
          {carouselItems.map((item, index) => (
            <Paper
              key={index}
              sx={{
                position: 'relative',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  textAlign: 'center',
                  padding: 4
                }}
              >
                <Typography variant="h3" sx={{ mb: 2 }}>
                  {item.title}
                </Typography>
                <Typography variant="h5">
                  {item.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Carousel>
      </Box>
      {/* <Typography variant="h2" sx={{ my: 4, textAlign: 'center' }}>
        Welcome to FMCG Store
      </Typography> */}
      
      {/* About Section */}
      <Box sx={{ my: 6 }}>
        <Paper elevation={3} sx={{ p: 4, bgcolor: 'background.default' }}>
          <Typography variant="h3" sx={{ mb: 3, textAlign: 'center' }}>
            About Us
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: 'center' }}>
            Welcome to Arumanam's Store, your trusted destination for premium quality consumer goods. 
            We take pride in offering authentic, carefully curated products that bring the authentic 
            taste of traditional Indian cuisine to your kitchen.
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
              Vision
              </Typography>
              <Typography variant="body2">
              Arumanam strives to empower our farmers and rural communities by deliveringauthentic, high-quality agro products that win customers' hearts through trust, tradition, quality and unforgettable flavours.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                Mission
              </Typography>
              <Typography variant="body2">
              Arumanam aims to deliver high-quality agro food products with innovative, practical packaging that aligns with modern trends and practical aspects, thus making us the most sought-after brand in the industry.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Featured Products
      </Typography>
      <Grid container spacing={3}>
        {featuredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {/* Contact Us Section */}
      <Box sx={{ my: 6 }}>
        <Paper elevation={3} sx={{ p: 4, bgcolor: 'background.default' }}>
          <Typography variant="h3" sx={{ mb: 3, textAlign: 'center' }}>
            Contact Us
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph sx={{ textAlign: 'center' }}>
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </Typography>
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                  Email
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  info@arumanam.com
                </Typography>
                
                <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                  Phone
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  +91 98765 43210
                </Typography>

                <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                  Address
                </Typography>
                <Typography variant="body1">
                  123 Business Street,
                  <br />
                  Chennai, Tamil Nadu 600001
                  <br />
                  India
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}

export default Home; 