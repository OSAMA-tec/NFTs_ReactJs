import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import img01 from "../../../assets/images/img-01.jpg";
import ava01 from "../../../assets/images/ava-01.png";

import './live-auction.css'
const Liveauction = () => {
  return (
    <>
      <section>
        <Container>
          <Col lg="12" className="md-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between">
              <h3>Live Auction</h3>
              <span>
                <Link to="/market">Explore more</Link>
              </span>
            </div>
          </Col>
          <Col lg="3" className="single__nft__card">
            <div className="nft__img">
              <img src={img01} alt="" className="w-100" />
            </div>
            <div className="nft__content">
              <h5 className="nft__title">Travel Monkey Club</h5>
              <div className="creator__info-wrapper d-flex gap-3">
                <div className="creator__img">
                  <img src={ava01} alt="" className="w-100" />
                </div>
                <div className="creator__info d-flex w-100 align-items-center justify-content-between">
                  <div >
                    <h6>Created by</h6>
                    <p>OSAMA HASHMI</p>
                  </div>
                  <div className="w-50">
                    <h6>Current Bid</h6>
                    <p>4.89 ETH</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-between">
                
              <button className="bid__btn d-flex align-items-center gap-1"><i class="ri-shopping-bag-line"></i>Place Bid</button>
              <span className="history__link"><Link to='#'>View History</Link></span>
              </div>
            </div>
          </Col>
        </Container>
      </section>
    </>
  );
};

export default Liveauction;
