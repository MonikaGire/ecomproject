import React from 'react';
// Components
import BrandList from 'src/components/_admin/brands/brandList';
// Toolbar
import Toolbar from 'src/components/_admin/toolbar';
// Breadcrumbs
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';

// Meta information
export const metadata = {
  title: 'Brands - Commercehope',
  applicationName: 'Commercehope',
  authors: 'Commercehope'
};
export default function Brands() {
  return (
    <>
      <Toolbar>
        <HeaderBreadcrumbs
          admin
          heading="Brands List"
          links={[
            {
              name: 'Dashboard',
              href: '/'
            },
            {
              name: 'Brands'
            }
          ]}
          action={{
            href: `/dashboard/brands/add`,
            title: 'Add brand'
          }}
        />
      </Toolbar>
      <BrandList />
    </>
  );
}
