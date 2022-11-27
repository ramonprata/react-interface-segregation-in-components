import * as React from 'react';
import ProductList from './ProductList';
import './style.css';

export default function Page() {
  const [shouldHighLight, setShouldHighLight] = React.useState(false);
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
        <ProductList shouldHighLight={shouldHighLight} />
      </div>
    </React.Fragment>
  );
}
