'use client';
import React from 'react';
// toolbar
import Toolbar from 'src/components/_admin/toolbar';
// breadcrumbs
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
// components
import EditMaterial from 'src/components/_admin/materials/editMaterial';
import * as api from 'src/services';
// usequery
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

Page.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired
};

export default function Page({ params }) {
  const { data, isLoading } = useQuery(['coupon-codes'], () => api.getMaterialByAdmin(params.slug), {
    onError: (err) => {
      toast.error(err.response.data.message || 'Something went wrong!');
    }
  });
  return (
    <div>
      <Toolbar>
        <HeaderBreadcrumbs
          admin
          heading="Materials List"
          links={[
            {
              name: 'Dashboard',
              href: '/'
            },
            {
              name: 'Materials',
              href: '/dashboard/material'
            },
            {
              name: data?.data.name
            }
          ]}
        />
      </Toolbar>
      <EditMaterial data={data?.data} isLoading={isLoading} />
    </div>
  );
}
