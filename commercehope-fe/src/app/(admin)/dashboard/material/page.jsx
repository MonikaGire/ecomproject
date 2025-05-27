import React from 'react';
// Components
import MaterialList from 'src/components/_admin/materials/materialList';
// Toolbar
import Toolbar from 'src/components/_admin/toolbar';
// Breadcrumbs
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';

// Meta information
export const metadata = {
  title: 'Materials - Commercehope',
  applicationName: 'Commercehope',
  authors: 'Commercehope'
};
export default function Materials() {
  return (
    <>
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
              name: 'materials'
            }
          ]}
          action={{
            href: `/dashboard/material/add`,
            title: 'Add Materials'
          }}
        />
      </Toolbar>
      <MaterialList />
    </>
  );
}
