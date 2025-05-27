import React from 'react';
import ProductForm from 'src/components/forms/product';

export default function addProduct({ brands, categories, subCategories,materials }) {
  return (
    <div>
      <ProductForm brands={brands} categories={categories} subCategories={subCategories}  materials={materials}/>
    </div>
  );
}
