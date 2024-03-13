import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

export default function HomePage() {
	// const [counter, setCounter] = useState(0);
	const counter = useSelector((state) => {
		// console.log(state.counter.count, "<<< state di selector");
		return state.counter.count;
	});
	const allState = useSelector((state) => state);
	const dispatch = useDispatch();

	console.log(allState, "<<< all state");
	console.log(counter, "<<< counter");

	return (
		<Container>
			<h1 className="p-5 text-center">Home Page</h1>
			<div className="d-flex justify-content-center gap-4">
				<Button
					variant="danger"
					onClick={() => {
						// counter -= 1 // state read only
						// setCounter(counter - 1);
						dispatch(decrement());
					}}
				>
					Decrement
				</Button>
				<h3>{counter}</h3>
				<Button
					variant="success"
					onClick={() => {
						dispatch(increment());
					}}
				>
					Increment
				</Button>
			</div>
		</Container>
	);
}
