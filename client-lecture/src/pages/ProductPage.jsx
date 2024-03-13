import { useEffect } from "react";
// import axios from "axios";
import { Button, Row } from "react-bootstrap";
// import renderPrice from "../utils/renderPrice";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  // fetchDataProductsFulfilled,
  // fetchDataProductsPending,
  // fetchDataProductsRejected,
  fetchProducts,
} from "../store/productSlice";

export default function ProductPage() {
  // const [products, setProducts] = useState([]);
  // ! Balikin suatu Function !
  const dispatcher = useDispatch();
  const { products } = useSelector((state) => state.barang);

  useEffect(() => {
    // const fetchProducts = async () => {
    //   try {
    //     dispatcher(fetchDataProductsPending());

    //     // Dispatch => suatu Function yang hanya bisa membaca Action
    //     // - Action itu adalah suatu Plain Objacet
    //     // - Yang isinya adalah Type dan Payload

    //     // HTTP Status Code = 2xx dan 3xx
    //     // HTTP Status Code = 4xx dan 5xx
    //     const { data } = await axios({
    //       url: "http://localhost:3001/products",
    //     });

    //     dispatcher(fetchDataProductsFulfilled(data || []));
    //     // setProducts(data || []);
    //   } catch (error) {
    //     dispatcher(fetchDataProductsRejected(error));
    //     console.log(error, "<<< An error while fetch products");
    //   }
    // };

    // fetchProducts();
    dispatcher(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
