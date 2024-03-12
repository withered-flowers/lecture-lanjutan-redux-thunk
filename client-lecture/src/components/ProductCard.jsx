import { Button, Card, Col } from "react-bootstrap";
import renderPrice from "../utils/renderPrice";

export default function ProductCard({ product }) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={product?.imgUrl} />
        <Card.Body>
          <Card.Title>{product?.name || "-"}</Card.Title>
          <Card.Text className="d-flex justify-content-between">
            <span>{renderPrice(product?.price)}</span>
            <Button variant="secondary">Add to Cart</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
