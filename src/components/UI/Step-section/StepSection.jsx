import React from "react";
import "./StepSection.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const STEP__DATA=[
    {
        title:'Create and sell your NFTs',
        desc:'helloo this nfts website',
        icon:'ri-wallet-line'
    },
    {
        title:'Create your collection',
        desc:'create the best nfts in the world and make it more attractive to make more money',
        icon:'ri-layout-masonry-line'
    },
    {
        title:'Add your NFTs',
        desc:'Add your  NFTs and then sell them with best price ',
        icon:'ri-folder-add-line'
    },
    {
        title:'List them for sale',
        desc:'List all the NFTs and then people can easily buy your art work',
        icon:'ri-list-check'
    },
]

const StepSection = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4">
              <h3 className="step__title"> Create and sell your NFTs</h3>
            </Col>

            {
                STEP__DATA.map((item,index)=><Col lg="3" md='4' sm='6' key={index} className='mb-4'>
                <div className="single__step__item">
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <div className="step__item__content">
                    <h5>
                      <Link to="/wallet">{item.title}t</Link>
                    </h5>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
                item
              </Col>)
            }
            
          </Row>
        </Container>
      </section>
    </>
  );
};

export default StepSection;
