import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Nftcard from "../Nft-card/Nftcard.jsx";
import { NFT__DATA } from "../../../assets/data/data.js";
import "./live-auction.css";


const Liveauction = () => {
  return (
    <>
      <section> 
        <Container>
        <Row>
        <Col lg="12" className="md-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between">
              <h3>Live Auction</h3>
              <span>
                <Link to="/market">Explore more</Link>
              </span>
            </div>
          </Col>
          {
            NFT__DATA.slice(0,4).map((item)=>(
                <Col lg="3" md='4' sm='6'  className="mb-4">
                <Nftcard key={item.id} item={item}/>
                </Col>
                ))
              }
              </Row>
        </Container>
      </section>
    </>
  );
};

export default Liveauction;
