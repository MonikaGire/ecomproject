'use client';
// react
import React from 'react';
// mui
import { Typography } from '@mui/material';
// components
import ProductsCarousel from 'src/components/carousels/products';
// styles
import RootStyled from './styled';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
// api
import * as api from 'src/services';
RelatedProducts.propTypes = {
  id: PropTypes.string.isRequired
};

export default function RelatedProducts({ ...props }) {
  const { id } = props;
  const { data, isLoading } = useQuery(['related-products'], () => api.getRelatedProducts(id));
  if (!isLoading && !Boolean(data?.data?.length)) {
    return null;
  }
  return (
    <RootStyled>
      <Typography variant="h2" color="text.primary" className="heading">
        Related Products
      </Typography>
      <Typography variant="body1" color="text.secondary" className="description">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
      </Typography>
      <ProductsCarousel data={data?.data} isLoading={isLoading} />
    </RootStyled>
  );
}
