import { Button, Container } from "react-bootstrap";

export default function HomePage() {
  return (
    <Container>
      <h1 className="p-5 text-center">Home Page</h1>
      <div className="d-flex justify-content-center gap-4">
        <Button variant="danger">Decrement</Button>
        <h3>0</h3>
        <Button variant="success">Increment</Button>
      </div>
    </Container>
  );
}
