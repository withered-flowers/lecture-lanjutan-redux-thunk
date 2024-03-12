import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";
import renderPrice from "../utils/renderPrice";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios({
        url: "http://localhost:3001/products",
      });
      setProducts(data || []);
    } catch (error) {
      console.log(error, "<<< An error while fetch products");
    }
  };

  return (
    <div className="px-4 ">
      <div className="d-flex justify-content-between my-4">
        <h2>List of Products</h2>
        <Button>Add Product</Button>
      </div>
      <div>
        <Row md={4} xs={2} className="g-4">
          {products.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </Row>
      </div>
    </div>
  );
}
