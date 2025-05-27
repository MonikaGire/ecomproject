import { Suspense } from 'react';

// mui
import { Container} from '@mui/material';

// components
import TopBanners from 'src/components/_main/home/topBanners';
import SliderOne from 'src/components/_main/mainpage/sliderOne';
import SliderTwo from 'src/components/_main/mainpage/sliderTwo';

export default async function LoadingPage() {
  return (
    <>
     
      <TopBanners />
      <Container fixed>
         <SliderOne />
      </Container>
     
      <Container fixed>
      <SliderTwo />
      </Container>
    </>
  );
}
