/* eslint-disable react/prop-types */
import { Button, Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import renderPrice from "../utils/renderPrice";

export default function ProductCard({ product }) {
	const dispatch = useDispatch();

	return (
		<Col>
			<Card>
				<Card.Img variant="top" src={product?.imgUrl} />
				<Card.Body>
					<Card.Title>{product?.name || "-"}</Card.Title>
					<Card.Text className="d-flex justify-content-between">
						<span>{renderPrice(product?.price)}</span>
						<Button
							variant="secondary"
							onClick={() => {
								dispatch(addToCart(product));
							}}
						>
							Add to Cart
						</Button>
					</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
}
