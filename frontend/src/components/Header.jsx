import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand>
              <img src={logo} alt="DecomHome" />
              G-Shop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar className="ms-auto">
              <LinkContainer to={"/cart"} style={{ color: "white" }}>
                <Nav.Link>
                  <FaShoppingCart color="white" /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer
                to={"/login"}
                style={{ color: "white", marginLeft: 20 }}
              >
                <Nav.Link>
                  <FaUser color="white" /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Navbar>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
