import * as React from 'react';
import ProductList from './ProductList';
import ProductItem from './ProductItem';
import './style.css';
import { Iproduct } from './useProducts';

export default function Page() {
  const [shouldHighLight, setShouldHighLight] = React.useState(false);

  // Page component now can pass shouldHighLight prop
  // directly to ProductItem
  const renderItem = (product: Iproduct) => (
    <ProductItem product={product} shouldHighLight={shouldHighLight} />
  );

  return (
    <React.Fragment>
      <div className="card">
        <div className="flex-inline">
          <h3>Page</h3>
          <label className="flex-inline">
            Highlight 5 stars
            <input
              type="checkbox"
              checked={shouldHighLight}
              onClick={() => setShouldHighLight((s) => !s)}
            />
          </label>
        </div>
        <ProductList renderItem={renderItem} />
      </div>
    </React.Fragment>
  );
}
