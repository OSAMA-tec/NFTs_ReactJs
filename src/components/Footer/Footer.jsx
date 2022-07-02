import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./footer.css";
const MY__ACCOUNT = [
  {
    display: "Author Profile",
    url: "/seller-profile",
  },
  {
    display: "Create Item",
    url: "/create",
  },
  {
    display: "Collection",
    url: "/market",
  },
  {
    display: "Edit Profile",
    url: "/edit-profile",
  },
];
const RESOURCES = [
  {
    display: "Help Center",
    url: "#",
  },
  {
    display: "Partner",
    url: "#",
  },
  {
    display: "Community",
    url: "#",
  },
  {
    display: "Activity",
    url: "#",
  },
];
const COMPANY = [
  {
    display: "About",
    url: "#",
  },
  {
    display: "Career",
    url: "#",
  },
  {
    display: "Ranking",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "/contact",
  },
];
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3" md="6" sm="6" className="mb-4">
              <div className="logo">
                <h2 className="d-flex gap-2 align-items-center">
                  <span>
                    <i className="ri-fire-fill"> </i>
                  </span>
                  NFTs
                </h2>
              </div>
              <p>I LOVE NFT </p>
            </Col>
            <Col lg="2" md="3" sm="6" className="mb-4">
              <h5>My Accounts</h5>
              <ListGroup className="list__group">
                {MY__ACCOUNT.map((item, index) => (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="2" md="3" sm="6" className="mb-4">
              <h5>Resources</h5>
              <ListGroup className="list__group">
                {RESOURCES.map((item, index) => (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="2" md="3" sm="6" className="mb-4">
              <h5>Company</h5>
              <ListGroup className="list__group">
                {COMPANY.map((item, index) => (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="2" md="3" sm="6" className="mb-4">
              <h5>NewsLetter</h5>
              <input type="text" className="newsletter" placeholder="Email" />
              <div className="social__Links">
                
                <span>
                  <Link to="#"></Link>
                  <i className="ri-github-fill"></i>
                </span>
                <span>
                  <Link to="#"></Link>
                  <i className="ri-instagram-fill"></i>
                </span>
                <span>
                  <Link to="#"></Link>
                  <i className="ri-linkedin-box-fill"></i>
                </span>
              </div>
            </Col>
            <Col lg='12' className="mt-4 text-center">
            <p className="copyright">
            Copyrights 2022-Developed by TB Company
            </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
