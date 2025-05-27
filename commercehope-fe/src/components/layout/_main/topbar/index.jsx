'use client';
import React from 'react';
// mui
import { Toolbar, Typography, Box, useTheme } from '@mui/material';

export default function UserTopbar() {
  const theme = useTheme();

  return (
    <Toolbar
      sx={{
        minHeight: `40px !important`,
        background: '#722F37',
        color: 'common.white',
        justifyContent: 'center',
        overflow: 'hidden',
        display: { xs: 'none', md: 'flex' },
        position: 'relative',
        whiteSpace: 'nowrap',
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: 'scrollLeft 20s linear infinite',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 500,
            fontSize: '0.875rem',
            color: 'white',
          }}
        >
          🎉 Limited Time Offer: <span style={{ color: '#FFD700' }}>20% Off on All Products!</span> Shop Now & Save Big! &nbsp;&nbsp;&nbsp;&nbsp;
          {/* 🎉 Limited Time Offer: <span style={{ color: '#FFD700' }}>20% Off on All Products!</span> Shop Now & Save Big! */}
        </Typography>
      </Box>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Toolbar>
  );
}
