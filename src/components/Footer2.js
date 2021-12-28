import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer2 = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Built Using</Heading>
            <FooterLink href="#">React</FooterLink>
            <FooterLink href="#">Vitessce</FooterLink>
          </Column>
          <Column>
            <Heading>Funding</Heading>
            <FooterLink href="#">Funding source 1</FooterLink>
            <FooterLink href="#">Funding source 2</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <Row>
          <Column>
            Copyright Macosko Lab at Broad Institute of MIT and Harvard
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer2;
