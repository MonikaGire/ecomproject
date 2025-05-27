import React from 'react';
// MUI
import { Container } from '@mui/material';
// Components
import HeroSkeleton from 'src/components/skeletons/home/hero';
import CategoriesSkeleton from 'src/components/skeletons/home/categories';
import TopBanners from './topBanners';
import Top from 'src/components/layout/_main/topbar/index';

export default function HomeSkeleton() {
  return (
    <>

      <HeroSkeleton />
      <Container fixed>
        <TopBanners />
        <CategoriesSkeleton />
      </Container>
    </>
  );
}
