import { Navbar, Nav, Badge } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import imgCart from "../assets/cart.png";
import { useSelector } from "react-redux";

export default function NavigationBar() {
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cart.productCarts);

  console.log(carts, "<<< carts");

  return (
    <Navbar bg="light" data-bs-theme="light" className="m-2">
      <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        GAKUNIQ
      </Navbar.Brand>
      <Nav>
        <Nav.Item>
          <NavLink
            to={"/"}
            className={"nav-link"}
            style={({ isActive }) => ({
              color: isActive ? "red" : "inherit",
            })}
          >
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to={"/products"}
            className={"nav-link"}
            style={({ isActive }) => ({
              color: isActive ? "red" : "inherit",
            })}
          >
            Products
          </NavLink>
        </Nav.Item>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <div style={{ position: "relative", marginRight: "30px" }}>
          <img src={imgCart} style={{ width: "30px" }} />
          <Badge
            style={{
              top: "-15px",
              position: "absolute",
              left: "25px",
            }}
            bg={"danger"}
          >
            {carts.length}
          </Badge>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
