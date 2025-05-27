'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

export default function AboutMain() {
  return (
    <Box sx={{ mt: { xs: 8, md: 14 }, position: 'relative',backgroundColor:'#000000' }}>

<Container maxWidth="md" sx={{ mt: { xs: 8, md: 14 }, position: 'relative' }}>
      {/* Portrait Image */}
      <Box sx={{ position: 'relative', width: '100%', maxWidth: 500, mx: 'auto' }}>
        <Image
          src="/images/about-1.jpg"
          alt="About Hero"
          width={800}
          height={1050} // Adjust to match portrait ratio
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
          priority
        />

        {/* Overlay Text (Above the Image like Hagis) */}
        <Typography
          variant="h1"
          sx={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#ffffff',
            fontFamily: 'Playfair Display, serif',
            fontSize: { xs: '5rem', sm: '4.5rem', md: '6rem' },
            textAlign: 'center',
            lineHeight: 1,
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          TWO<br />BROTHER&apos;S
        </Typography>
      </Box>
    </Container>

      {/* MAIN STORY */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h4"
            fontWeight={600}
            gutterBottom
            fontFamily="Playfair Display, serif"
          >
            The Journey Of &quot;Two Brother&apos;s&quot;
          </Typography>
          <Typography variant="subtitle1">The Owner</Typography>
        </Box>

        <Typography
          paragraph
          sx={{ fontSize: { sm: '1.25rem', md: '1.5rem' }, fontFamily: 'Playfair Display, serif', mb: 4 }}
        >
          Two Brothers Inc. was founded by two individuals—friends by choice and brothers by chance—who shared a vision to revolutionize the lighting industry. With a passion for innovation and a commitment to excellence, we offer technologically advanced and aesthetically refined lighting solutions.
        </Typography>

        <Typography
          paragraph
          sx={{ fontSize: { sm: '1.25rem', md: '1.5rem' }, fontFamily: 'Playfair Display, serif' }}
        >
          At Two Brothers Inc., we believe lighting is more than just illumination—it’s an experience. Our designs reflect a balance of elegance, efficiency, and customizability, ensuring that every space we light up tells a unique story.
        </Typography>
      </Container>

      {/* NIKHIL SECTION */}
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Image src="/images/about-5.jpg" alt="Nikhil" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight={500} mb={2}>
              Nikhil - Director
            </Typography>
            <Typography sx={{ fontSize: { sm: '1.25rem', md: '1.5rem' }, fontFamily: 'Playfair Display, serif' }}>
              Driven by creativity and ambition, Nikhil brings technical brilliance and a refined eye for design to Two Brothers Inc.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* FULL WIDTH IMAGE */}
      <Box>
        <Image
          src="/images/about-3.jpg"
          alt="Showroom"
          width={1720}
          height={900}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </Box>

      {/* BHAVIN SECTION */}
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography variant="h6" fontWeight={500} mb={2}>
              Bhavin Shah - Director
            </Typography>
            <Typography sx={{ fontSize: { sm: '1.25rem', md: '1.5rem' }, fontFamily: 'Playfair Display, serif' }}>
              Bhavin blends strategic vision with operational excellence, ensuring that every product from Two Brothers is a masterpiece.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Image src="/images/about-2.jpg" alt="Bhavin" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
