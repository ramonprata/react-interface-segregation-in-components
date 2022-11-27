import * as React from 'react';
import './style.css';
import { Iproduct } from './useProducts';

// BAD: ProductImage doesn't need
// the entire product object(description, stars, imagePath, ...)
function BADProductImage(props: { product: Iproduct }) {
  return <img src={props.product.imagePath} />;
}

// Apply Interface Segregation Principle
// So, ProductImage only need the imagePath prop
export default function ProductImage(props: { imagePath: string }) {
  return <img src={props.imagePath} />;
}
