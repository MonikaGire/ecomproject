'use client';
// react
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// next
import Image from 'next/image';
import Link from 'next/link';
// mui
import {
  Box,
  Grid,
  Paper,
  Button,
  Typography,
  CardContent,
  Container,
  useMediaQuery,
  Stack,
  alpha
} from '@mui/material';
// redux
import { useSelector } from 'react-redux';
// framer motion
import { motion, AnimatePresence } from 'framer-motion';
import { varFadeInRight, MotionContainer } from 'src/components/animate';
// components
import Actions from './actions';

// Motion variants
const variants = {
  enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

// ---------------------- Carousel Item ----------------------
function CarouselItem({ item, index, themeMode }) {
  const isMobile = useMediaQuery('@media (max-width: 992px)');
  const [first, setFirst] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFirst(true);
    }, 100);
  }, [index]);

  return (
    <Paper
      sx={{
        position: 'relative',
        pb: { xl: '30%', lg: '30%', md: '27%', xs: '60%' },
        borderBottom: (theme) => '1px solid ' + theme.palette.divider,
        zIndex: 1,
        borderRadius: 0,
        overflow: 'hidden',
        objectFit:'cover'
      }}
    >
      {/* Background Video */}
      {item?.video && (
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          src={item.video}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
      )}

      {/* Background Image fallback (if no video) */}
      {!item?.video && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
           }}
        >
          <Image
            src={item.cover}
            alt="background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </Box>
      )}

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: themeMode === 'dark' ? alpha('#000', 0.1) : alpha('#000', 0.1),
          zIndex: 1
        }}
      />

      {/* Foreground Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardContent
              sx={{
                pt: { xl: '40%', md: '60%', xs: '60%' },
                transform: 'translateY(-50%)',
                width: '100%',
                maxWidth: { md: '90%', xs: '100%' },
                textAlign: 'left',
                position: 'absolute',
                color: 'common.white'
              }}
            >
              <MotionContainer open={first}>
                <motion.div variants={varFadeInRight}>
                  <Typography
                    variant="h2"
                    color="common.white"
                    fontWeight="900!important"
                    gutterBottom
                  >
                    {item?.heading}
                  </Typography>
                </motion.div>
                <motion.div variants={varFadeInRight}>
                  <Typography
                    variant="h6"
                    color="grey.300"
                    fontWeight={400}
                    gutterBottom
                    sx={{ mt: 1 }}
                  >
                    {item?.description}
                  </Typography>
                </motion.div>
                <motion.div variants={varFadeInRight}>
                  <Box mt={2}>
                    <Button
                      size={isMobile ? 'small' : 'large'}
                      variant="contained"
                      component={Link}
                      href={item?.btnPrimary.url}
                      sx={{ mr: 2 }}
                    >
                      {item?.btnPrimary.btnText}
                    </Button>
                    <Button
                      size={isMobile ? 'small' : 'large'}
                      variant="outlined"
                      color="secondary"
                      component={Link}
                      href={item?.btnSecondary.url}
                    >
                      {item?.btnSecondary.btnText}
                    </Button>
                  </Box>
                </motion.div>
              </MotionContainer>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

CarouselItem.propTypes = {
  item: PropTypes.shape({
    cover: PropTypes.string,
    video: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
    btnPrimary: PropTypes.shape({
      url: PropTypes.string,
      btnText: PropTypes.string
    }),
    btnSecondary: PropTypes.shape({
      url: PropTypes.string,
      btnText: PropTypes.string
    })
  }),
  index: PropTypes.number,
  themeMode: PropTypes.string
};

// ---------------------- Carousel Wrapper ----------------------
export default function SingleSlideCarousel({ data }) {
  const { themeMode } = useSelector(({ settings }) => settings);
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = Math.abs(page % data?.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 12000);
    return () => clearInterval(interval);
  }, [page]);

  const isEmpty = !Boolean(data?.length);

  return (
    <Paper
      sx={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xl: '20%', md: '30%', xs: '60%' },
        
        borderRadius: 0,
        borderBottom: (theme) => '1px solid ' + theme.palette.divider,
        boxShadow: 'none'
      }}
    >
      {isEmpty ? (
        <Stack
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <Typography variant="h4" color="text.secondary">
            Slides are not uploaded yet!
          </Typography>
        </Stack>
      ) : (
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              top: 0
            }}
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <CarouselItem
              themeMode={themeMode}
              item={data ? data[imageIndex] : null}
              index={imageIndex}
            />
          </motion.div>
        </AnimatePresence>
      )}

      {data.length && (
        <Actions active={imageIndex} themeMode={themeMode} setPage={setPage} paginate={paginate} data={data} />
      )}
    </Paper>
  );
}

SingleSlideCarousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string,
      video: PropTypes.string,
      heading: PropTypes.string,
      description: PropTypes.string,
      color: PropTypes.string,
      btnPrimary: PropTypes.shape({
        url: PropTypes.string,
        btnText: PropTypes.string
      }),
      btnSecondary: PropTypes.shape({
        url: PropTypes.string,
        btnText: PropTypes.string
      })
    })
  ).isRequired
};
