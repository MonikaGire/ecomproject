import * as React from 'react';
// mui
import { Box } from '@mui/material';
// components
import Topbar from 'src/components/layout/_main/topbar';
import Navbar from 'src/components/layout/_main/navbar';
import Footer from 'src/components/layout/_main/footer';
import { cookies } from 'next/headers';

// Meta information
export const metadata = {
  title: 'Commercehope E-commerce Script | Your Gateway to Seamless Shopping and Secure Transactions',
  description:
    'Log in to Commercehope for secure access to your account. Enjoy seamless shopping, personalized experiences, and hassle-free transactions. Your trusted portal to a world of convenience awaits. Login now!',
  applicationName: 'Commercehope',
  authors: 'Commercehope',
  keywords: 'ecommerce, Commercehope, Commerce, Login Commercehope, LoginFrom Commercehope',
  icons: {
    icon: '/favicon.png'
  },
  openGraph: {
    images: 'https://commercehope-app.vercel.app/opengraph-image.png'
  }
};

export default async function RootLayout({ children }) {
  const cookiesList = cookies();
  const hasCookie = cookiesList.get('token');

  return (
    <>
      <Topbar  />
      <Navbar isAuth={hasCookie} />
      {children}
      <Box sx={{ py: { xs: 5, md: 3 } }} />
      <Footer />
    </>
  );
}
