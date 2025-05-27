import React from 'react';
// Toolbar
import Toolbar from 'src/components/_admin/toolbar';
// Breadcrumbs
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
// components
import AddMaterial from 'src/components/_admin/materials/addMaterial';
export default function page() {
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
              name: 'Add brand'
            }
          ]}
        />
      </Toolbar>
      <AddMaterial />
    </div>
  );
}
