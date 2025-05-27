import React from 'react';
import MaterialsForm from 'src/components/forms/materials';

export default function addMaterial({ data, isLoading }) {
  return (
    <div>
      <MaterialsForm data={data} isLoading={isLoading} />
    </div>
  );
}