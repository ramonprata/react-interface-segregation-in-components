import * as React from 'react';
import ProductImage from './ProductImage';
import './style.css';
import { Iproduct } from './useProducts';

export default function ProductItem(props: {
  product: Iproduct;
  shouldHighLight: boolean;
}) {
  const { product, shouldHighLight } = props;
  const highlightClass =
    shouldHighLight && product.stars === 5 ? 'highlighted' : '';

  return (
    <div className={`card item ${highlightClass}`}>
      <div className="flex-inline">
        {/* BAD */}
        {/* <ProductImage product={product} /> */}

        {/* GOOD */}
        <ProductImage imagePath={product.imagePath} />
        <div>
          <p className="primary-text">{product.description}</p>
          <p className="secondary-text">
            {product.subDescription}
            {' - '}
            <span className={`${highlightClass}`}> stars: {product.stars}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
