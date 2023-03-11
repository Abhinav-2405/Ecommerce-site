import { products } from "./products.js";
export function Shop() {
  return (
    <div className="shop-container">
      <h1 className="shop-title">My Shop</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
