// Header component

// Node imports
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"; // client-side page-routing replacement for href

// vanilla-extract styling
import * as styles from "./Header.css";

// Local imports
import config from "../../config.js"; // Application configuration data
import ArrowSVG from "../../images/arrow.svg";
import { vars } from "../../styles/themes.css.js";

function Header() {
  return (
    <div className={styles.header}>
      <Navbar expand="lg" className="navbar-dark">
        <Container className={styles.spaced}>
          <Navbar.Brand as={Link} to={"/"} className={styles.brand}>
            <ArrowSVG
              width={20}
              height={20}
              color={vars.colors.brand}
              strokeWidth={3}
              stroke={vars.colors.complementary}
            />
            <span className={styles.brandName}>@holmesdev/cursors</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={styles.colour}
          />
          <Navbar.Collapse id="basic-navbar-nav" className={styles.options}>
            <Nav>
              <Nav.Link as={Link} to={""} className={styles.colour}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"demo"} className={styles.colour}>
                Demo
              </Nav.Link>
              <Nav.Link as={Link} to={"docs"} className={styles.colour}>
                Documentation
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={`${config.githubRepoURL}`}
                target="_blank"
                className={styles.colour}
              >
                GitHub
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
