import * as React from 'react';
import './style.css';
import { Iproduct, useProducts } from './useProducts';

// ProductList doesn't need shouldHighLight prop aymore
// WE APPLIED ISP (INTERFACE SEGREGATION PRINCIPLE)!!!
export default function ProductList(props: {
  renderItem(p: Iproduct): React.ReactNode;
}) {
  const products = useProducts();
  return (
    <div className="card">
      <div className="flex-inline">
        <h3>ProductList</h3>
      </div>
      <div>{products.map((p) => props.renderItem(p))}</div>
    </div>
  );
}
